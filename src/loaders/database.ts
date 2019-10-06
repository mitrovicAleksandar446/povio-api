import {
	createConnection,
	ConnectionOptions,
	DatabaseType,
	useContainer,
} from 'typeorm';
import { Container } from 'typedi';
import config from '../../config/db';

export default async (): Promise<void> => {
	const entities = process.env.NODE_ENV !== 'production'
		? `${__dirname}/../entities/*.ts`
		: `${__dirname}/../../dist/entities/*.js`;
	// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
	// @ts-ignore
	const options: ConnectionOptions = {
		type: config('type') as DatabaseType,
		host: config('host'),
		port: config('port'),
		username: config('username'),
		password: config('password'),
		database: config('name'),
		entities: [entities],
		synchronize: Boolean(config('sync')),
		logging: Boolean(config('logging')),
	};
	try {
		useContainer(Container);
		await createConnection(options);
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);
	}
}
