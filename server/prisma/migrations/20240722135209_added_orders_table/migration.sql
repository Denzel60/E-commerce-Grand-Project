-- CreateTable
CREATE TABLE "User_table" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "additionalPhoneNumber" TEXT,
    "address" INTEGER,
    "region" TEXT,
    "city" TEXT,
    "role" TEXT,

    CONSTRAINT "User_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products_table" (
    "id" TEXT NOT NULL,
    "Seller" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,

    CONSTRAINT "Products_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders_table" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Orders_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_table_phoneNumber_key" ON "User_table"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_table_email_key" ON "User_table"("email");

-- AddForeignKey
ALTER TABLE "Products_table" ADD CONSTRAINT "Products_table_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders_table" ADD CONSTRAINT "Orders_table_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
