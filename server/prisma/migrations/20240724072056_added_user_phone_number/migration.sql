/*
  Warnings:

  - Added the required column `userPhoneNumber` to the `Orders_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders_table" ADD COLUMN     "userPhoneNumber" INTEGER NOT NULL;
