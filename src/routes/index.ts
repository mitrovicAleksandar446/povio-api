import express, { Router } from 'express';
import user from './user';
import auth from './auth';

const router: Router = express.Router();

router.use('/users', user);
router.use('/', auth);

export default router;
