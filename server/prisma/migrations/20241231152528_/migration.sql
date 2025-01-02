-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_serviceId_fkey";

-- CreateTable
CREATE TABLE "_CompanyServices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CompanyServices_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CompanyServices_B_index" ON "_CompanyServices"("B");

-- AddForeignKey
ALTER TABLE "_CompanyServices" ADD CONSTRAINT "_CompanyServices_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyServices" ADD CONSTRAINT "_CompanyServices_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
