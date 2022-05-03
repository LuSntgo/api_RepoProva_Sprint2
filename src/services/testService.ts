import categoryRepository from "../repositories/categoryRepository.js";
import disciplineRepository from "../repositories/disciplineRepository.js";
import teacherRepository from "../repositories/teacherRepository.js";
import testRepository from "../repositories/testRepository.js";

interface Filter {
  groupBy: "disciplines" | "teachers";
}
export type CreateTestData = {
  name: string;
  pdfUrl: string;
  categoryId: number;
  teacherDisciplineId: number;
};

async function find(filter: Filter) {
  if (filter.groupBy === "disciplines") {
    return testRepository.getTestsByDiscipline();
  } else if (filter.groupBy === "teachers") {
    return testRepository.getTestsByTeachers();
  }
}

async function add(
  name: string,
  pdfUrl: string,
  categoryName: string,
  disciplineName: string,
  teacherName: string
) {
  const { id: categoryId } = await categoryRepository.findByName(categoryName);
  const { id: disciplineId } = await disciplineRepository.findByName(
    disciplineName
  );
  const { id: teacherId } = await teacherRepository.findByName(teacherName);
  const { id: teacherDisciplineId } =
    await teacherRepository.findTeacherDiscipline(teacherId, disciplineId);

  const data = {
    name,
    pdfUrl,
    categoryId,
    teacherDisciplineId,
  };

  await testRepository.add(data);
}

async function updateViews(id: number) {
  await testRepository.updateViewsCount(id);
}

export default {
  find,
  add,
  updateViews,
};
