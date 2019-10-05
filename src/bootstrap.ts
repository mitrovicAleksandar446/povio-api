import 'reflect-metadata';
import { Application } from 'express';
import { createConnection } from 'typeorm';
import { port } from '../config/app';
import {
	type, host, port as dbPort, username, password, name as database,
} from '../config/db';
import User from './entities/User';
import Like from './entities/Like';

export default (app: Application): void => {
	app.listen(port, async () => {
		// eslint-disable-next-line no-console
		console.log(`App started on port ${port}`);

		createConnection({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'aleksa446',
			database: 'povio',
			entities: [
				`${__dirname}/entities/*.ts`,
			],
			synchronize: true,
		}).then(conn => console.log('Connected'))
			.catch(err => console.error(err));
	});
};
