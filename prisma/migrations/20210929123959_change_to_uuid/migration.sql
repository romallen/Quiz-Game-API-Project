/*
  Warnings:

  - The primary key for the `Question` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `question_id` on the `Question` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Question" DROP CONSTRAINT "Question_pkey",
DROP COLUMN "question_id",
ADD COLUMN     "question_id" UUID NOT NULL,
ADD CONSTRAINT "Question_pkey" PRIMARY KEY ("question_id");
