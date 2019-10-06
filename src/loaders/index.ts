import { Application } from 'express';
import ExpressLoader from './express';
import envLoader from './env';
import corsLoader from './cors';
import databaseLoader from './database';

const init = (app: Application): void => {
	const loaders: Array<Function> = [
		envLoader,
		ExpressLoader,
		corsLoader,
		databaseLoader,
	];
	loaders.forEach(l => l(app));
};

export default init;
