import { Request, Response } from 'express';
import { HttpStatusCode } from '../enums/httpEnum';
import * as professorServicee from '../services/professorService';

async function list (req: Request, res: Response) {

    const result = await professorServicee.list()
    res.status(HttpStatusCode.OK).send(result);
}

export {
    list,
}