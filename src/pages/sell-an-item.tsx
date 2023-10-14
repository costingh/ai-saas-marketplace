/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Icon from "~/components/Icon";
import Link from "next/link";
import confetti from '~/utils/confetti'

import React, { FC, useEffect, useState } from 'react';
type SellItemForm = {
	name: string;
	description: string;
	price: string;
	location: string;
	ttm_profit: string;
	ttm_revenue: string;
	team_size: string;
	date_founded: string;
	tech_stack: string;
	business_model: string;
	competitors: string;
	growth_opportunity: string;
	assets: string;
	reason_selling: string;
	financing: string;
};

const SellAnItem: NextPage = () => {
	const createListing = api.listings.create.useMutation();
	const router = useRouter();

	const [step, setStep] = useState(1)
	const [recentlyCreatedProduct, setRecentlyCreatedProduct] = useState<boolean>(false)
	const [timeUntilRedirect, setTimeUntilRedirect] = useState<number | 0>(5);
	const [savingProduct, setSavingProduct] = useState<boolean>(false)
	const [intervalRef, setIntervalRef] = useState<NodeJS.Timer | null>(null);

	const { register, handleSubmit } = useForm<SellItemForm>();
	const onSubmit = (formData: SellItemForm) => {
		setSavingProduct(true)
		const interval = setInterval(() => {
			setTimeUntilRedirect((prev) => prev - 1);
		}, 1000);

		setIntervalRef(interval)
		setRecentlyCreatedProduct(true)

		createListing
			.mutateAsync({
				...formData,
				price: parseFloat(formData.price),
				ttm_profit: parseFloat(formData.ttm_profit),
				ttm_revenue: parseFloat(formData.ttm_revenue),
				team_size: parseInt(formData.team_size),
				tech_stack: formData.tech_stack,
				competitors: formData.competitors,
				assets: formData.assets,
			})
			.then(() => {
				setTimeout(() => {
					setSavingProduct(false)
					confetti({
						particleCount: 800,
						spread: 500,
					});
				}, 2000)
			});

		return () => {
			clearInterval(interval);
		};

	};


	const goNext = () => {
		setStep(prev => prev + 1)
	}

	const goBack = () => {
		setStep(prev => prev - 1)
	}

	const goToStep = (_step: number) => {
		setStep(_step)
	}

	const finish = () => {

	}

	useEffect(() => {
		if (timeUntilRedirect === 0) {
			intervalRef && clearInterval(intervalRef);
			window.location.href = '/browse';
		}
	}, [timeUntilRedirect])


	const cancel = () => {

	}

	type ValidId = "name" | "description" | "price" | "location" | "ttm_profit" | "ttm_revenue" | "team_size" | "date_founded" | "tech_stack" | "business_model" | "competitors" | "growth_opportunity" | "assets" | "reason_selling" | "financing";

	type InputProps = {
		elementType?: 'input' | 'textarea';
		inputType?: string;
		customStyle?: React.CSSProperties;
		labelName: string;
		id: ValidId;
		isRequired: boolean;
		placeholder?: string;
	};

	const Input: FC<InputProps> = ({
		elementType = 'input',
		inputType = 'text',
		customStyle,
		labelName,
		id,
		isRequired,
		placeholder,
	}) => (
		<div className="flex flex-col" style={customStyle}>
			<label htmlFor={id}>{labelName}</label>
			{elementType === 'input' && (
				<input
					id={id}
					type={inputType}
					placeholder={placeholder}
					{...register(id, { required: isRequired })}
				/>
			)}

			{elementType === 'textarea' && (
				<textarea
					id={id}
					placeholder={placeholder}
					{...register(id, { required: isRequired })}
				></textarea>
			)}
		</div>
	);

	return (
		<>
			<Head>
				<title>Sell an Item</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{!recentlyCreatedProduct &&
				<main className="flex min-h-screen flex-col items-center justify-center mx-auto">

					<div className="steps">
						<div className={`step ${step == 1 && 'active'}`} onClick={() => goToStep(1)}>1</div>
						<div className="line"></div>
						<div className={`step ${step == 2 && 'active'}`} onClick={() => goToStep(2)}>2</div>
						<div className="line"></div>
						<div className={`step ${step == 3 && 'active'}`} onClick={() => goToStep(3)}>3</div>
						<div className="line"></div>
						<div className={`step ${step == 4 && 'active'}`} onClick={() => goToStep(4)}>4</div>
					</div>

					<h1 className="step-title">
						{step == 1 && 'Get started listing your product'}
						{step == 2 && 'Say more about your app'}
						{step == 3 && 'A little bit more details'}
						{step == 4 && "You're almost there"}
					</h1>

					<form
						className="list-application-form flex flex-col gap-4"
						onSubmit={handleSubmit(onSubmit)}
					>
						{step === 1 && (
							<div>
								<div className="flex align-center justify-between gap-6">
									<div className="flex flex-col" style={{ width: '50%' }}>
										<Input
											elementType="input"
											id="name"
											labelName="Application name"
											placeholder="Ai Aquire"
											isRequired={true}
										/>
									</div>
									<div className="flex flex-col" style={{ width: '50%' }}>
										<Input
											elementType="input"
											id="date_founded"
											labelName="Date Founded"
											inputType="date"
											isRequired={true}
										/>
									</div>
								</div>

								<div className="flex flex-col mt-4">
									<Input
										elementType="input"
										id="location"
										labelName="Where is it based?"
										placeholder="United Kingdom"
										isRequired={true}
									/>
								</div>

								<div className="flex flex-col mt-4">
									<Input
										elementType="textarea"
										id="description"
										labelName="Describe your app in a few words"
										placeholder="Web app leveraging an online market place to sell latest AI SaaS products"
										isRequired={true}
									/>
								</div>
							</div>
						)}

						{step === 2 && (
							<div>
								<div className="flex flex-col mt-4">
									<Input
										elementType="input"
										id="competitors"
										labelName="Application Competitors"
										placeholder="MicroAquire"
										isRequired={true}
									/>
								</div>

								<div className="flex flex-col mt-4">
									<Input
										elementType="textarea"
										id="business_model"
										labelName="Business Model"
										placeholder="B2C SaaS with packages ranging from $9-29/mo with a token usage model. Pricing and token usage can easily be adjusted."
										isRequired={true}
									/>
								</div>

								<div className="flex flex-col mt-4">
									<Input
										elementType="textarea"
										id="growth_opportunity"
										labelName="Growth Opportunity"
										placeholder="Describe how the overall image status of the application can be improved for growth"
										isRequired={true}
									/>
								</div>
							</div>
						)}

						{step === 3 && (
							<div>
								<div className="flex align-center justify-between gap-6">
									<div className="flex flex-col" style={{ width: '50%' }}>
										<Input
											elementType="input"
											id="team_size"
											labelName="Team Size"
											placeholder="4"
											inputType="number"
											isRequired={true}
										/>
									</div>

									<div className="flex flex-col" style={{ width: '50%' }}>
										<Input
											elementType="input"
											id="price"
											labelName="Asking Price"
											placeholder="7000"
											inputType="number"
											isRequired={true}
										/>
									</div>
								</div>

								<div className="flex align-center justify-between gap-6 mt-4">
									<div className="flex flex-col" style={{ width: '50%' }}>
										<Input
											elementType="input"
											id="ttm_profit"
											labelName="TTM Profit"
											placeholder="7000"
											inputType="number"
											isRequired={true}
										/>
									</div>
									<div className="flex flex-col" style={{ width: '50%' }}>
										<Input
											elementType="input"
											id="ttm_revenue"
											labelName="TTM Revenue"
											placeholder="7000"
											inputType="number"
											isRequired={true}
										/>
									</div>
								</div>

								<div className="flex flex-col mt-4">
									<Input
										elementType="textarea"
										id="financing"
										labelName="Financing"
										placeholder="Bootstrapped"
										isRequired={true}
									/>
								</div>
							</div>
						)}

						{step === 4 && (
							<div>
								<div className="flex flex-col">
									<Input
										elementType="input"
										id="tech_stack"
										labelName="Application Tech Stack"
										placeholder="NextJS, Prisma, React, Typescript"
										isRequired={true}
									/>
								</div>

								<div className="flex flex-col mt-4">
									<Input
										elementType="input"
										id="reason_selling"
										labelName="Reason for Selling"
										placeholder="I got no time to deal with this rn"
										isRequired={true}
									/>
								</div>

								<div className="flex flex-col mt-4">
									<Input
										elementType="input"
										id="assets"
										labelName="Assets"
										placeholder="I got no time to deal with this rn"
										isRequired={true}
									/>
								</div>
							</div>
						)}

						{(step == 1 || step == 2 || step == 3) &&
							<div className="flex flex-row gap-4">
								{step != 1 &&
									<div className="btn back-btn" onClick={goBack}>
										<Icon icon="go_back" />
									</div>
								}
								<div className="btn next-btn" onClick={goNext}>Next</div>
							</div>
						}

						{step == 4 &&
							<>
								<button
									type="submit"
									className="btn next-btn"
									onClick={finish}
								>
									List my application
								</button>

								<Link href={'/browse'} className="btn cancel-btn" onClick={cancel}>I want to cancel</Link>
							</>
						}
						<span className="important-notice">All steps above are required</span>
					</form>

				</main>
			}

			{recentlyCreatedProduct &&
				<main className="flex min-h-screen flex-col items-center justify-center mx-auto">
					<div className="lds-ripple"><div></div><div></div></div>
					<div className="product-creation-confirmation-title">{savingProduct ? 'Creating your product' : 'Your product was created and listed successfully!'}</div>
					<p className="product-creation-confirmation-paragraph">{savingProduct ? 'Trying to save it...' : <>Redirecting you back to products listings in  <span>{timeUntilRedirect} s</span></>}</p>
				</main>
			}
		</>
	);
};

export default SellAnItem;
