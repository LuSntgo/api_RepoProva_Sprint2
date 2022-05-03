import { prisma } from "../database.js";
import { CreateTestData } from "../services/testService.js";

async function getTestsByDiscipline() {
  return prisma.term.findMany({
    include: {
      disciplines: {
        include: {
          teacherDisciplines: {
            include: {
              teacher: true,
              tests: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

async function getTestsByTeachers() {
  return prisma.teacherDiscipline.findMany({
    include: {
      teacher: true,
      discipline: true,
      tests: {
        include: {
          category: true,
        },
      },
    },
  });
}

async function add(createTestData: CreateTestData) {
  return prisma.test.create({
    data: createTestData,
  });
}

async function updateViewsCount(id: number) {
  return prisma.test.update({
    where: {
      id,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });
}

export default {
  getTestsByDiscipline,
  getTestsByTeachers,
  add,
  updateViewsCount,
};