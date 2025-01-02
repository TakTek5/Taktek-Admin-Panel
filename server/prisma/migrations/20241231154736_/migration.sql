-- CreateTable
CREATE TABLE "CompanyService" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "CompanyService_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyService_companyId_serviceId_key" ON "CompanyService"("companyId", "serviceId");

-- AddForeignKey
ALTER TABLE "CompanyService" ADD CONSTRAINT "CompanyService_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyService" ADD CONSTRAINT "CompanyService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
