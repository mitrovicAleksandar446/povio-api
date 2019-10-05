import { Application } from 'express';
import ExpressLoader from './express';
import dotenvLoader from './dotenv';
import corsLoader from './cors';

const init = (app: Application): void => {
	const loaders: Array<Function> = [
		ExpressLoader,
		dotenvLoader,
		corsLoader,
	];
	loaders.forEach(l => l(app));
};

export default init;
