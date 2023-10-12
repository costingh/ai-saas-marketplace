/*
  Warnings:

  - You are about to drop the column `offers_number` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `total_views` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `unique_views` on the `Listing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "offers_number",
DROP COLUMN "total_views",
DROP COLUMN "unique_views";
