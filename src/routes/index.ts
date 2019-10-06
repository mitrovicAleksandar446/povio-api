import express, { Router } from 'express';
import user from './user';
import auth from './auth';
import like from './like';

const router: Router = express.Router();

router.use('/users', user);
router.use('/', auth);
router.use('/', like);

export default router;
