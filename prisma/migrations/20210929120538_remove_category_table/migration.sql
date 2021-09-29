/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_categoryID_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Question";

-- CreateTable
CREATE TABLE "question" (
    "question_id" UUID NOT NULL,
    "question" VARCHAR(255) NOT NULL,
    "answer" VARCHAR(255) NOT NULL,
    "category" VARCHAR(100) NOT NULL,
    "points" INTEGER NOT NULL,
    "difficulty" INTEGER NOT NULL,

    CONSTRAINT "question_pkey" PRIMARY KEY ("question_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "question_question_key" ON "question"("question");
