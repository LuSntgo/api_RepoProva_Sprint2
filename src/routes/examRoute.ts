import { Router } from 'express';
import * as examController from '../controllers/examController';

export default (router: Router): void => {
    router.get('/exams', examController.list);
}