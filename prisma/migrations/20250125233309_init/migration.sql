-- CreateTable
CREATE TABLE "Place" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "funFacts" TEXT[],

    CONSTRAINT "Place_pkey" PRIMARY KEY ("id")
);
