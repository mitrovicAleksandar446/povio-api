import { Length, IsNotEmpty } from 'class-validator';
import NewUserSchema from './schemas/NewUserSchema';

export default class NewUser implements NewUserSchema {
	@IsNotEmpty()
	@Length(4, 20)
	readonly password: string;

	@IsNotEmpty()
	@Length(5, 20)
	readonly username: string;

	constructor(password: string, username: string) {
		this.password = password;
		this.username = username;
	}
}
