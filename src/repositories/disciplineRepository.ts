import { prisma } from "../database.js";

async function getAll() {
  return prisma.discipline.findMany({});
}

async function findByName(discipline: string) {
  return prisma.discipline.findUnique({
    where: {
      name: discipline,
    },
  });
}

export default { getAll, findByName };
