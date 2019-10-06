import {
	createConnection,
	ConnectionOptions,
	DatabaseType,
	useContainer,
} from 'typeorm';
import { Container } from 'typedi';
import {
	type,
	host,
	port,
	username,
	password,
	name as database,
} from '../../config/db';

export default async (): Promise<void> => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
	// @ts-ignore
	const options: ConnectionOptions = {
		type: type as DatabaseType,
		host,
		port,
		username,
		password,
		database,
		entities: [
			`${__dirname}/../entities/*.ts`,
		],
		synchronize: true,
		logging: true,
	};
	try {
		useContainer(Container);
		await createConnection(options);
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);
	}
}
