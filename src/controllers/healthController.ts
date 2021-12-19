import { Request, Response } from 'express';
import { HttpStatusCode } from '../enums/httpEnum';

const sentences = [
    "It's alive!!!",
    "Lord Vader can you hear me?",
    "You do not talk about ***** *****",
    "Times are hard for dreamers"
]

async function checkStatus (req: Request, res: Response) {
    const rand = Math.floor(Math.random() * ((sentences.length))) 

    res.status(HttpStatusCode.OK).send(sentences[rand])
}

export {
    checkStatus,
}