import { Request, Response } from 'express';
import {  HttpStatusCode } from '../enums/httpEnum';
import * as examService from '../services/examService';

async function list (req: Request, res: Response) {

    const result = await examService.list();
    res.status(HttpStatusCode.OK).send(result)
}

export {
    list,
}