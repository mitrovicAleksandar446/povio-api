import { Application } from 'express';
import * as dotenv from 'dotenv';
import Router from '../router';

export default (app: Application): void => {
	dotenv.config();
	app.use('/', Router);
}
