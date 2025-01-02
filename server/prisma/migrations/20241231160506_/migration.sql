/*
  Warnings:

  - You are about to drop the `CompanyService` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompanyService" DROP CONSTRAINT "CompanyService_companyId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyService" DROP CONSTRAINT "CompanyService_serviceId_fkey";

-- DropTable
DROP TABLE "CompanyService";
