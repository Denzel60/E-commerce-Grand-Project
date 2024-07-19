-- CreateTable
CREATE TABLE "Products_table" (
    "id" TEXT NOT NULL,
    "Seller" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Products_table_pkey" PRIMARY KEY ("id")
);
