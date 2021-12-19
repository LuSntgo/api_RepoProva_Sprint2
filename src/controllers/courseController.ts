import { Request, Response } from 'express';
import { HttpStatusCode } from '../enums/httpEnum';
import * as courseService from '../services/courseService';

async function listNames (req: Request, res: Response) {
    const result = await courseService.listNames();
    res.status(HttpStatusCode.OK).send(result);
}

export {
    listNames,
}