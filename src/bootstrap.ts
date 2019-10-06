import 'reflect-metadata';
import { Application } from 'express';
import config from '../config/app';

export default (app: Application): void => {
	app.listen(config('port'), async () => {
		// eslint-disable-next-line no-console
		console.log(`⚔️ App started on port ${config('port')} 🛡️`);
	});
};
