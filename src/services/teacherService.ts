import teacherRepository from "../repositories/teacherRepository.js";

async function getTeachersNames() {
  return teacherRepository.getNames();
}

async function GetTeachersByDisciplines(discipline: string) {
  return teacherRepository.getByDiscipline(discipline);
}

export default {
  getTeachersNames,
  GetTeachersByDisciplines,
};