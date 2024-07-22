/*
  Warnings:

  - Added the required column `name` to the `Products_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products_table" ADD COLUMN     "name" TEXT NOT NULL;
