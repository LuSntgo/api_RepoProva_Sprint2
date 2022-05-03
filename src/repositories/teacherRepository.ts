import { prisma } from "../database.js";

async function getNames() {
  return prisma.teacher.findMany({
    select: {
      name: true,
    },
  });
}

async function getByDiscipline(discipline: string) {
  return prisma.teacherDiscipline.findMany({
    select: {
      teacher: true,
    },
    where: {
      discipline: {
        name: discipline,
      },
    },
  });
}

async function findByName(teacher: string) {
  return prisma.teacher.findUnique({
    where: {
      name: teacher,
    },
  });
}

async function findTeacherDiscipline(teacherId: number, disciplineId: number) {
  return prisma.teacherDiscipline.findFirst({
    where: {
      teacherId,
      disciplineId,
    },
  });
}

export default {
  getNames,
  getByDiscipline,
  findByName,
  findTeacherDiscipline,
};