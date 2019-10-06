import { Length, IsNotEmpty } from 'class-validator';
import UserLoginSchema from './schemas/UserLoginSchema';

export default class UserLogin implements UserLoginSchema {
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
