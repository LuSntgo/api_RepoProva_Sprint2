import disciplineRepository from "../repositories/disciplineRepository.js";

async function getDisciplines() {
  return disciplineRepository.getAll();
}

export default {
  getDisciplines,
};