-- CreateTable
CREATE TABLE "Category" (
    "category_id" UUID NOT NULL,
    "category" VARCHAR(100) NOT NULL,
    "isValidCategory" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Question" (
    "question_id" UUID NOT NULL,
    "question" VARCHAR(255) NOT NULL,
    "answer" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "categoryID" UUID NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("question_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_key" ON "Category"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Question_question_key" ON "Question"("question");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
