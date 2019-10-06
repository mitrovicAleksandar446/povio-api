import { Application } from 'express';
import bodyParser from 'body-parser';
import Router from '../routes';
import { errorHandler, notFound } from '../http/handlers/errorHandlers';

export default (app: Application): void => {
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use('/', Router);
	app.use(notFound);
	app.use(errorHandler);
}
