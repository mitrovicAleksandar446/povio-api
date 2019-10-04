import { Application } from 'express';
import { port } from '../config/app';

export default (app: Application): void => {
	app.listen(port, () => {
		// eslint-disable-next-line no-console
		console.log(`App started on port ${port}`);
	});
};
