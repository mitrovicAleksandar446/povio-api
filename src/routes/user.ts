import express, { Router } from 'express';
import * as userController from '../http/controllers/userController';
import checkJWT from '../http/middlewares/auth';
import { catchErrors } from '../http/handlers/errorHandlers';

const router: Router = express.Router();

router.get('/:id([0-9]+)', catchErrors(userController.showUserWithLikes));
router.post('/:id([0-9]+)/like', checkJWT, catchErrors(userController.like));
router.delete('/:id([0-9]+)/unlike', checkJWT, catchErrors(userController.unlike));

export default router;
