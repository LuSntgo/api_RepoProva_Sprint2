import { getRepository } from 'typeorm';
import ProfessorEntity from '../entities/ProfessorEntity';

async function list () {

    const reuslt = await getRepository(ProfessorEntity).find();
    return reuslt;
}

export {
    list,
}