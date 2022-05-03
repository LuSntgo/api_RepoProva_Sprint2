import {prisma} from "../database.js";

async function findMany() {
  return prisma.category.findMany();
}

async function findByName(category: string) {
  return prisma.category.findUnique({
    where: {
      name: category,
    },
  });
}

export default {
  findMany,
  findByName,
};