/*
  Warnings:

  - You are about to alter the column `answer` on the `Question` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "answer" SET DATA TYPE VARCHAR(255);
