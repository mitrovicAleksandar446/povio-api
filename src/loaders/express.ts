import { Application } from 'express';
import bodyParser from 'body-parser';
import Router from '../routes';

export default (app: Application): void => {
	app.use('/', Router);
	app.use(bodyParser.json());
}
