import { Request, Response } from "express";
import disciplineService from "../services/disciplineService.js";

async function getDisciplinesNames(req: Request, res: Response) {
  const disciplines = await disciplineService.getDisciplines();

  res.status(200).send({ disciplines });
}

export default {
  getDisciplinesNames,
};