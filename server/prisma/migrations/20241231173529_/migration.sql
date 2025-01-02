/*
  Warnings:

  - You are about to drop the `TechnicianService` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TechnicianService" DROP CONSTRAINT "TechnicianService_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "TechnicianService" DROP CONSTRAINT "TechnicianService_technicianId_fkey";

-- DropTable
DROP TABLE "TechnicianService";

-- CreateTable
CREATE TABLE "_TechnicianServices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_TechnicianServices_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_TechnicianServices_B_index" ON "_TechnicianServices"("B");

-- AddForeignKey
ALTER TABLE "_TechnicianServices" ADD CONSTRAINT "_TechnicianServices_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TechnicianServices" ADD CONSTRAINT "_TechnicianServices_B_fkey" FOREIGN KEY ("B") REFERENCES "Technician"("id") ON DELETE CASCADE ON UPDATE CASCADE;
