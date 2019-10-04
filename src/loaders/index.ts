import { Application } from 'express';
import expressLoader from './express';

const init = (app: Application): void => {
	const loaders: Array<Function> = [
		expressLoader,
	];
	loaders.forEach(l => l(app));
};

export default init;
