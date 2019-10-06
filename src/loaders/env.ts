// eslint-disable-next-line @typescript-eslint/no-var-requires
const customEnv = require('custom-env');

export default (): void => {
	if (process.env.NODE_ENV === undefined) customEnv.env();
	if (process.env.NODE_ENV === undefined) throw new Error('.env file is not created with NODE_ENV property');
	customEnv.env(process.env.NODE_ENV);
}
