-- CreateTable
CREATE TABLE "Statistics" (
    "id" SERIAL NOT NULL,
    "action" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "shop_id" INTEGER NOT NULL,
    "plu" TEXT NOT NULL,
    "raw_log" TEXT NOT NULL,

    CONSTRAINT "Statistics_pkey" PRIMARY KEY ("id")
);
