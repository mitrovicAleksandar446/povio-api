import { getConnection, Connection } from 'typeorm';
import { Service } from 'typedi';

@Service()
export default abstract class Repository {
	protected connection: Connection;

	constructor() {
		this.connection = getConnection();
	}
}
