import express, { Router } from 'express';
import * as authController from '../http/controllers/authController';
import signUpValidationChain from '../http/middlewares/validators/auth/signup';
import loginValidationChain from '../http/middlewares/validators/auth/login';
import { catchErrors } from '../http/handlers/errorHandlers';
import checkJWT from '../http/middlewares/auth';

const router: Router = express.Router();

router.post('/sign-up', signUpValidationChain, catchErrors(authController.signUp));
router.post('/login', loginValidationChain, catchErrors(authController.login));
router.post('/me', checkJWT, catchErrors(authController.me));

export default router;
