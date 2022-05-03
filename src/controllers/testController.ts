import { Request, Response } from "express";
import testService from "../services/testService.js";

async function find(req: Request, res: Response) {
  const { groupBy } = req.query as { groupBy: string };

  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await testService.find({ groupBy });
  res.send({ tests });
}

async function add(req: Request, res: Response) {
  const { name, pdfUrl, categoryName, disciplineName, teacherName } = req.body;

  await testService.add(
    name,
    pdfUrl,
    categoryName,
    disciplineName,
    teacherName
  );

  res.sendStatus(201);
}

async function updateViews(req: Request, res: Response) {
  const { id } = req.params;

  await testService.updateViews(parseInt(id));

  res.sendStatus(200);
}

export default {
  find,
  add,
  updateViews,
};