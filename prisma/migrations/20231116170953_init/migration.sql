-- CreateTable
CREATE TABLE "Tweet" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tweet" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "Tweet_pkey" PRIMARY KEY ("id")
);
