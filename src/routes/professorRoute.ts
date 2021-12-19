import { Router } from 'express';
import * as professorController from '../controllers/professorController';

export default (router: Router): void => {
    router.get('/professors', professorController.list);
}