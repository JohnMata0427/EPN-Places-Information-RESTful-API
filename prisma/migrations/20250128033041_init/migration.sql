/*
  Warnings:

  - The `funFacts` column on the `Place` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Place" ALTER COLUMN "id" DROP DEFAULT,
DROP COLUMN "funFacts",
ADD COLUMN     "funFacts" VARCHAR(1000)[];
DROP SEQUENCE "Place_id_seq";
