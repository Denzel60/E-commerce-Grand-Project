-- AddForeignKey
ALTER TABLE "Products_table" ADD CONSTRAINT "Products_table_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
