-- CreateTable
CREATE TABLE "AdminLog" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConstractorLogs" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConstractorLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "profileName" TEXT,
    "profileImage" TEXT,
    "accessLevel" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "dateofHire" TIMESTAMP(3),
    "jobTitle" TEXT,
    "paymentRate" DECIMAL(65,30),
    "routeId" TEXT,
    "collectionPlanId" TEXT,
    "roleName" TEXT NOT NULL DEFAULT 'UNASSIGNED',
    "stsId" TEXT,
    "landfillId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "contractorId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contractor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "registrationId" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3),
    "tinNumber" TEXT,
    "contactNumber" TEXT,
    "workforceSize" DECIMAL(65,30),
    "paymentPerTon" DECIMAL(10,2),
    "requiredWastePerDay" DECIMAL(10,2) NOT NULL,
    "contractDuration" TEXT,
    "area" TEXT,
    "stsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contractor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractorBill" (
    "id" TEXT NOT NULL,
    "contractorId" TEXT NOT NULL,
    "stsId" TEXT NOT NULL,
    "billNo" SERIAL NOT NULL,
    "paymentPerTon" DECIMAL(10,2),
    "deficit" DECIMAL(10,2),
    "weightRequired" DECIMAL(10,2),
    "weightCollected" DECIMAL(10,2),
    "paymentAmount" DECIMAL(10,2),
    "fine" DECIMAL(10,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContractorBill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "STSContractorEntry" (
    "id" TEXT NOT NULL,
    "stsId" TEXT NOT NULL,
    "contractorId" TEXT NOT NULL,
    "wasteType" TEXT,
    "wasteWeight" DECIMAL(10,2),
    "entryTime" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "exitTime" TIMESTAMP(3),
    "vehicleNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "STSContractorEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Landfill" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "capacity" DECIMAL(10,2),
    "currentTotalWaste" DECIMAL(10,2),
    "operationalTimeSpan" DECIMAL(10,2),
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Landfill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandfillVehicleEntry" (
    "id" TEXT NOT NULL,
    "landfillId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "weightOfWaste" DECIMAL(10,2),
    "entryTime" TIMESTAMP(3) NOT NULL,
    "exitTime" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LandfillVehicleEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "vehicleNumber" TEXT NOT NULL,
    "vehicleType" TEXT NOT NULL,
    "capacity" DECIMAL(10,2) NOT NULL,
    "lodadedFuelCostPerKm" DECIMAL(10,2) NOT NULL,
    "unloadedFuelCostPerKm" DECIMAL(10,2) NOT NULL,
    "currentLatitude" DECIMAL(65,30),
    "currentLongitude" DECIMAL(65,30),
    "landfillId" TEXT NOT NULL,
    "stsId" TEXT NOT NULL,
    "duration" DECIMAL(10,2),
    "distance" DECIMAL(10,2),

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bill" (
    "id" TEXT NOT NULL,
    "billNo" SERIAL NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "stsId" TEXT NOT NULL,
    "landfillId" TEXT NOT NULL,
    "tripId" TEXT,
    "weightOfWaste" DECIMAL(10,2),
    "allocatedFuelCost" DECIMAL(10,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "STSVehicleEntry" (
    "id" TEXT NOT NULL,
    "stsId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "weightOfWaste" DECIMAL(10,2),
    "entryTime" TIMESTAMP(3),
    "exitTime" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "STSVehicleEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectionPlan" (
    "id" TEXT NOT NULL,
    "areaId" TEXT NOT NULL,
    "collectionStartTime" TIMESTAMP(3),
    "durationForCollection" DECIMAL(65,30),
    "numberOfLaborers" DECIMAL(65,30),
    "numberOfVens" DECIMAL(65,30),
    "expectedWaste" DECIMAL(65,30),
    "stsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CollectionPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "stsId" TEXT NOT NULL,
    "landfillId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "tripStartTime" TIMESTAMP(3),
    "tripEndTime" TIMESTAMP(3),
    "weightOfWaste" DECIMAL(10,2),
    "shortage" DECIMAL(10,2),
    "estimatedFuelCost" DECIMAL(10,2),
    "distance" DECIMAL(10,2),
    "estimatedDuration" DECIMAL(10,2),
    "actualDuration" DECIMAL(10,2),
    "tripStatus" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "STS" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "wardNumber" TEXT,
    "capcity" DECIMAL(10,2),
    "currentTotalWaste" DECIMAL(10,2),
    "requiredWastePerWeek" DECIMAL(10,2),
    "paymentPerTon" DECIMAL(10,2),
    "fine" DECIMAL(10,2),
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "STS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "stsId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "scheduleDate" TIMESTAMP(3) NOT NULL,
    "scheduleTime" TEXT NOT NULL,
    "wasteAmount" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Route" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "areaId" TEXT,
    "stsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Area" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PermissionToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PermissionToRole_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "username_index" ON "User"("username");

-- CreateIndex
CREATE INDEX "email_index" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Contractor_name_key" ON "Contractor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ContractorBill_billNo_key" ON "ContractorBill"("billNo");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_vehicleNumber_key" ON "Vehicle"("vehicleNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Bill_billNo_key" ON "Bill"("billNo");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_name_key" ON "Permission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Route_name_key" ON "Route"("name");

-- CreateIndex
CREATE INDEX "_PermissionToRole_B_index" ON "_PermissionToRole"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_collectionPlanId_fkey" FOREIGN KEY ("collectionPlanId") REFERENCES "CollectionPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleName_fkey" FOREIGN KEY ("roleName") REFERENCES "Role"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_stsId_fkey" FOREIGN KEY ("stsId") REFERENCES "STS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_landfillId_fkey" FOREIGN KEY ("landfillId") REFERENCES "Landfill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contractor" ADD CONSTRAINT "Contractor_stsId_fkey" FOREIGN KEY ("stsId") REFERENCES "STS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractorBill" ADD CONSTRAINT "ContractorBill_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractorBill" ADD CONSTRAINT "ContractorBill_stsId_fkey" FOREIGN KEY ("stsId") REFERENCES "STS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "STSContractorEntry" ADD CONSTRAINT "STSContractorEntry_stsId_fkey" FOREIGN KEY ("stsId") REFERENCES "STS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "STSContractorEntry" ADD CONSTRAINT "STSContractorEntry_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandfillVehicleEntry" ADD CONSTRAINT "LandfillVehicleEntry_landfillId_fkey" FOREIGN KEY ("landfillId") REFERENCES "Landfill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandfillVehicleEntry" ADD CONSTRAINT "LandfillVehicleEntry_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_landfillId_fkey" FOREIGN KEY ("landfillId") REFERENCES "Landfill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_stsId_fkey" FOREIGN KEY ("stsId") REFERENCES "STS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_stsId_fkey" FOREIGN KEY ("stsId") REFERENCES "STS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_landfillId_fkey" FOREIGN KEY ("landfillId") REFERENCES "Landfill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "STSVehicleEntry" ADD CONSTRAINT "STSVehicleEntry_stsId_fkey" FOREIGN KEY ("stsId") REFERENCES "STS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "STSVehicleEntry" ADD CONSTRAINT "STSVehicleEntry_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionPlan" ADD CONSTRAINT "CollectionPlan_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionPlan" ADD CONSTRAINT "CollectionPlan_stsId_fkey" FOREIGN KEY ("stsId") REFERENCES "STS"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_stsId_fkey" FOREIGN KEY ("stsId") REFERENCES "STS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_landfillId_fkey" FOREIGN KEY ("landfillId") REFERENCES "Landfill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_stsId_fkey" FOREIGN KEY ("stsId") REFERENCES "STS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_stsId_fkey" FOREIGN KEY ("stsId") REFERENCES "STS"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Area" ADD CONSTRAINT "Area_stsId_fkey" FOREIGN KEY ("stsId") REFERENCES "STS"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToRole" ADD CONSTRAINT "_PermissionToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToRole" ADD CONSTRAINT "_PermissionToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
