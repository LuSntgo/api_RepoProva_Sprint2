import { getRepository } from 'typeorm';
import ExamEntity from '../entities/ExamEntity'

async function list () {
    
    const result = await getRepository(ExamEntity).find();
    return result.map(e => e.getExam());
}

async function find () {
    
    const result = await getRepository(ExamEntity).find();
    return result.map(e => e.getExam());
}

export {
    list,
    find
}