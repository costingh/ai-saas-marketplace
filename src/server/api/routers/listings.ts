import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import {
	createTRPCRouter,
	protectedProcedure,
	publicProcedure,
} from "~/server/api/trpc";

export const listingsRouter = createTRPCRouter({
	list: publicProcedure.query(async ({ ctx }) => {
		const listings = await ctx.prisma.listing.findMany();

		const likesWithCount = await Promise.all(
			listings.map(async (listing) => {
				const likeCount = await ctx.prisma.like.count({
					where: {
						listingId: listing.id,
					},
				});

				const like = await ctx.prisma.like.findFirst({
					where: {
						fromUser: ctx.auth.userId ?? '',
						listingId: listing.id,
					},
				});

				return {
					...listing,
					isLikedByUser: like ? true : false,
					likeCount,
				};
			})
		);

		return likesWithCount;
	}),
	get: publicProcedure
		.input(z.object({ listingId: z.string() }))
		.query(async ({ ctx, input }) => {
			const listing = await ctx.prisma.listing.findUnique({
				where: {
					id: input.listingId,
				},
			});

			if (!listing) {
				return null;
			}

			const like = await ctx.prisma.like.findFirst({
				where: {
					fromUser: ctx.auth.userId ?? '',
					listingId: input.listingId,
				},
			});

			return {
				...listing,
				isLikedByUser: like ? true : false,
			};
		}),
	getMessage: protectedProcedure.query(async ({ input, ctx }) => {
		const userId = ctx.auth.userId;
		const listing = await ctx.prisma.listing.findMany({
			where: {
				userId,
			},
			include: {
				message: true,
			},
		});
		return listing.flatMap((item) => item.message);
	}),
	sendMessage: protectedProcedure
		.input(z.object({ message: z.string(), listingId: z.string() }))
		.mutation(async ({ input, ctx }) => {
			const fromUser = await clerkClient.users.getUser(ctx.auth.userId);

			const message = await ctx.prisma.message.create({
				data: {
					fromUser: ctx.auth.userId,
					fromUserName: fromUser.username ?? "unknown",
					listingId: input.listingId,
					message: input.message
				},
			});
			return message;
		}),
	sendLike: protectedProcedure
		.input(z.object({ listingId: z.string() }))
		.mutation(async ({ input, ctx }) => {
			const fromUser = await clerkClient.users.getUser(ctx.auth.userId);

			const like = await ctx.prisma.like.create({
				data: {
					fromUser: ctx.auth.userId,
					fromUserName: fromUser.username ?? "unknown",
					listingId: input.listingId,
				},
			});
			return like;
		}),
	unlike: protectedProcedure
		.input(z.object({ listingId: z.string() }))
		.mutation(async ({ input, ctx }) => {
			const like = await ctx.prisma.like.findFirst({
				where: {
					fromUser: ctx.auth.userId,
					listingId: input.listingId,
				},
			});

			if (like) {
				await ctx.prisma.like.delete({ where: { id: like.id } });
				return 200;
			}

			return 500;
		}),
	create: protectedProcedure
		.input(
			z.object({
				name: z.string(),
				description: z.string(),
				price: z.number(),
				location: z.string(),
				ttm_profit: z.number(),
				ttm_revenue: z.number(),
				team_size: z.number(),
				date_founded: z.string(),
				tech_stack: z.string(),
				business_model: z.string(),
				competitors: z.string(),
				growth_opportunity: z.string(),
				assets: z.string(),
				reason_selling: z.string(),
				financing: z.string(),
			})
		)
		.mutation(async ({ input, ctx }) => {
			const listing = await ctx.prisma.listing.create({
				data: {
					...input,
					userId: ctx.auth.userId,
					tech_stack: input.tech_stack.split(','),
					competitors: input.competitors.split(','),
					assets: input.assets.split(',')
				},
			});
			return listing;
		}),
});
