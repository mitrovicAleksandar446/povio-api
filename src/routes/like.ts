import express, { Router } from 'express';
import * as userController from '../http/controllers/userController';
import { catchErrors } from '../http/handlers/errorHandlers';

const router: Router = express.Router();

router.get('/most-liked', catchErrors(userController.showMostLikedUsers));

export default router;
