let config: object | null = null;

export default (property?: string) => {
	if (config !== null) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore
		return !property ? config : config[property];
	}
	config = {
		secret: process.env.JWT_SECRET || '@TEST',
	};
	// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
	// @ts-ignore
	return !property ? config : config[property];
};
