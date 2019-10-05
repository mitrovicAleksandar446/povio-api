import { Application } from 'express';
import ExpressLoader from './express';
import dotenvLoader from './dotenv';
import corsLoader from './cors';
import databaseLoader from './database';

const init = (app: Application): void => {
	const loaders: Array<Function> = [
		ExpressLoader,
		dotenvLoader,
		corsLoader,
		databaseLoader,
	];
	loaders.forEach(l => l(app));
};

export default init;
