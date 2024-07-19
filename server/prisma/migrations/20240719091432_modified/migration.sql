/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `User_table` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User_table" ADD COLUMN     "additionalPhoneNumber" TEXT,
ADD COLUMN     "address" INTEGER,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "region" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_table_phoneNumber_key" ON "User_table"("phoneNumber");
