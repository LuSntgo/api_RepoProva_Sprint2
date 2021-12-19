import { getRepository } from 'typeorm';
import CourseEntity from '../entities/CourseEntity'

async function listNames () {
    
    const result = await getRepository(CourseEntity).find();
    return result.map(c => c.getCourse());
}


export {
    listNames
}