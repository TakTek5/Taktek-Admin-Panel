/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `location` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `User` table. All the data in the column will be lost.
  - The primary key for the `_CompanyServices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Lead` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Technician` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Lead" DROP CONSTRAINT "Lead_technicianId_fkey";

-- DropForeignKey
ALTER TABLE "Lead" DROP CONSTRAINT "Lead_userId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_technicianId_fkey";

-- DropForeignKey
ALTER TABLE "Technician" DROP CONSTRAINT "Technician_companyId_fkey";

-- DropForeignKey
ALTER TABLE "_CompanyServices" DROP CONSTRAINT "_CompanyServices_A_fkey";

-- DropIndex
DROP INDEX "Technician_phone_key";

-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
DROP COLUMN "location",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "businessReg" TEXT DEFAULT '',
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "driverLicense" TEXT DEFAULT '',
ADD COLUMN     "driverLicenseExpDate" TEXT DEFAULT '',
ADD COLUMN     "insurance" TEXT DEFAULT '',
ADD COLUMN     "insuranceExpDate" TEXT DEFAULT '',
ADD COLUMN     "license" TEXT DEFAULT '',
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "zipCode" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Company_id_seq";

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Technician" DROP COLUMN "location",
DROP COLUMN "phone",
DROP COLUMN "status",
ADD COLUMN     "available" BOOLEAN DEFAULT true,
ADD COLUMN     "license" TEXT DEFAULT '',
ADD COLUMN     "licenseExpDate" TEXT DEFAULT '',
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "verified" BOOLEAN DEFAULT false,
ALTER COLUMN "companyId" SET DATA TYPE TEXT,
ALTER COLUMN "photo" DROP NOT NULL,
ALTER COLUMN "photo" SET DEFAULT '';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "location",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "photo" TEXT DEFAULT '';

-- AlterTable
ALTER TABLE "_CompanyServices" DROP CONSTRAINT "_CompanyServices_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE TEXT,
ADD CONSTRAINT "_CompanyServices_AB_pkey" PRIMARY KEY ("A", "B");

-- DropTable
DROP TABLE "Lead";

-- DropTable
DROP TABLE "Review";

-- CreateTable
CREATE TABLE "TechnicianReview" (
    "id" SERIAL NOT NULL,
    "description" TEXT DEFAULT '',
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "technicianId" INTEGER NOT NULL,

    CONSTRAINT "TechnicianReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyReview" (
    "id" SERIAL NOT NULL,
    "description" TEXT DEFAULT '',
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "CompanyReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserReview" (
    "id" SERIAL NOT NULL,
    "description" TEXT DEFAULT '',
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Call" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "technicianId" INTEGER NOT NULL,

    CONSTRAINT "Call_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "technicianId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agent" (
    "id" SERIAL NOT NULL,
    "companyId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Agent_email_key" ON "Agent"("email");

-- AddForeignKey
ALTER TABLE "Technician" ADD CONSTRAINT "Technician_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicianReview" ADD CONSTRAINT "TechnicianReview_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "Technician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyReview" ADD CONSTRAINT "CompanyReview_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReview" ADD CONSTRAINT "UserReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Call" ADD CONSTRAINT "Call_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Call" ADD CONSTRAINT "Call_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "Technician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "Technician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agent" ADD CONSTRAINT "Agent_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyServices" ADD CONSTRAINT "_CompanyServices_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
