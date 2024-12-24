-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cohort" TEXT NOT NULL,
    "courses" TEXT NOT NULL,
    "dateJoined" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLogin" TEXT NOT NULL DEFAULT '',
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);
