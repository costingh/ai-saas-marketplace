-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "location" TEXT NOT NULL,
    "ttm_profit" DOUBLE PRECISION NOT NULL,
    "ttm_revenue" DOUBLE PRECISION NOT NULL,
    "team_size" INTEGER NOT NULL,
    "date_founded" TEXT NOT NULL,
    "tech_stack" TEXT[],
    "business_model" TEXT NOT NULL,
    "competitors" TEXT[],
    "growth_opportunity" TEXT NOT NULL,
    "assets" TEXT[],
    "reason_selling" TEXT NOT NULL,
    "financing" TEXT NOT NULL,
    "unique_views" BIGINT NOT NULL,
    "total_views" BIGINT NOT NULL,
    "offers_number" BIGINT NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "fromUser" TEXT NOT NULL,
    "fromUserName" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "deliveredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Like" (
    "id" TEXT NOT NULL,
    "fromUser" TEXT NOT NULL,
    "fromUserName" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "likedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
