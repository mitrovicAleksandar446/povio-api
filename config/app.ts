let config: object | null = null;

export default (property?: string) => {
	if (config !== null) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore
		return !property ? config : config[property];
	}
	config = {
		port: process.env.APP_PORT || 3000,
	};
	// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
	// @ts-ignore
	return !property ? config : config[property];
};
