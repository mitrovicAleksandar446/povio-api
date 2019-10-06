import express, { Router } from 'express';
import * as authController from '../http/controllers/authController';
import signUpValidationChain from '../http/middlewares/validators/auth/signup';
import { catchErrors } from '../http/handlers/errorHandlers';

const router: Router = express.Router();

router.post('/sign-up', signUpValidationChain, catchErrors(authController.signUp));
router.post('/login', authController.login);

export default router;
