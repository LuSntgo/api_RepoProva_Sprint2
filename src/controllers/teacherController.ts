import { Request, Response } from "express";
import teacherService from "../services/teacherService.js";

async function getTeachersNames(req: Request, res: Response) {
  const teachers = await teacherService.getTeachersNames();

  res.status(200).send({ teachers });
}

async function getTeachersByDiscipline(req: Request, res: Response) {
  const { discipline } = req.params;
  const teachers = await teacherService.GetTeachersByDisciplines(discipline);

  res.status(200).send({ teachers });
}

export default {
  getTeachersNames,
  getTeachersByDiscipline,
};