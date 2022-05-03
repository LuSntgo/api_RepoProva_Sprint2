import { faker } from "@faker-js/faker";
import { Test, Category, TeacherDiscipline } from "@prisma/client";
import { prisma } from "../../src/database.js";


export default async function testFactory(disciplineId: number, teacherId: number) {
	const teacherDiscipline: TeacherDiscipline = await prisma.teacherDiscipline.create({
		data: {
			teacherId: disciplineId,
			disciplineId: teacherId
		}
	});

	const categories = await prisma.category.findMany();
	const category: Category = categories[0];

	const test: Test = await prisma.test.create({
		data: {
			name: faker.lorem.lines(),
			pdfUrl: faker.internet.url(),
			categoryId: category.id,
			teacherDisciplineId: teacherDiscipline.id,
      views: 0
		}
	});

  return test;
}