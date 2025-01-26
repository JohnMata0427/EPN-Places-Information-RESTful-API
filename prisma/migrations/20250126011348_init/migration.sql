/*
  Warnings:

  - You are about to alter the column `funFacts` on the `Place` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.

*/
-- AlterTable
ALTER TABLE "Place" ALTER COLUMN "funFacts" SET DEFAULT 'No existen datos curiosos',
ALTER COLUMN "funFacts" SET DATA TYPE VARCHAR(1000);
