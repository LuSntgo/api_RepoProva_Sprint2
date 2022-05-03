/*
  Warnings:

  - You are about to drop the `TeacherDiscipline` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TeacherDiscipline" DROP CONSTRAINT "TeacherDiscipline_disciplineId_fkey";

-- DropForeignKey
ALTER TABLE "TeacherDiscipline" DROP CONSTRAINT "TeacherDiscipline_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_teacherDisciplineId_fkey";

-- DropTable
DROP TABLE "TeacherDiscipline";

-- CreateTable
CREATE TABLE "teacherDiscipline" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "teacherDiscipline_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "teacherDiscipline" ADD CONSTRAINT "teacherDiscipline_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teacherDiscipline" ADD CONSTRAINT "teacherDiscipline_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES "teacherDiscipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
