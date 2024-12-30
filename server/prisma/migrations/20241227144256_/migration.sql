/*
  Warnings:

  - Added the required column `photo` to the `Technician` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Technician" ADD COLUMN     "photo" TEXT NOT NULL;
