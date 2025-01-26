/*
  Warnings:

  - You are about to alter the column `description` on the `Place` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.
  - A unique constraint covering the columns `[name]` on the table `Place` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Place" ALTER COLUMN "description" SET DATA TYPE VARCHAR(1000),
ALTER COLUMN "funFacts" SET NOT NULL,
ALTER COLUMN "funFacts" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Place_name_key" ON "Place"("name");
