let config: object | null = null;

export default (property?: string) => {
	if (config !== null) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore
		return !property ? config : config[property];
	}
	config = {
		type: process.env.DB_TYPE || 'mysql',
		host: process.env.DB_HOST || 'localhost',
		port: process.env.DB_PORT || 3306,
		username: process.env.DB_USERNAME || 'root',
		password: process.env.DB_PASSWORD || 'aleksa446',
		name: process.env.DB_NAME || 'povio',
		sync: process.env.DB_SYNC || true,
		logging: process.env.DB_LOGGING || false,
	};
	// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
	// @ts-ignore
	return !property ? config : config[property];
};
