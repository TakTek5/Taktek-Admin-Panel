/*
  Warnings:

  - The `location` column on the `Technician` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Technician" DROP COLUMN "location",
ADD COLUMN     "location" JSONB;
