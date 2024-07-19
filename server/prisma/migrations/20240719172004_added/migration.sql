/*
  Warnings:

  - You are about to drop the column `userId` on the `Products_table` table. All the data in the column will be lost.
  - Added the required column `sellerId` to the `Products_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products_table" DROP COLUMN "userId",
ADD COLUMN     "sellerId" TEXT NOT NULL;
