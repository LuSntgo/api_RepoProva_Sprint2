import { Router } from 'express';
import * as courseController from '../controllers/courseController';

export default (router: Router): void => {
    router.get('/courses', courseController.listNames);
}