// eslint-disable-next-line @typescript-eslint/no-var-requires
const customEnv = require('custom-env');

export default (): void => {
	customEnv.env();
	const env = process.env.NODE_ENV;
	if (env === undefined) throw new Error('.env file is not created with NODE_ENV property');
	customEnv.env(env);
}
