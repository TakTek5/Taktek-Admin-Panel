/*
  Warnings:

  - Made the column `rating` on table `ServiceProvider` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ServiceProvider" ALTER COLUMN "rating" SET NOT NULL;
