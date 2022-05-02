import categoryRepository from "../repositories/categoryRepository.js";

async function findMany() {
  return categoryRepository.findMany();
}

export default {
  findMany,
};
