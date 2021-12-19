import { Router } from 'express';
import * as healthController from '../controllers/healthController';

export default (router: Router): void => {
    router.get('/status', healthController.checkStatus);
}