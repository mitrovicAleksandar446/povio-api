import { IsInt, IsNotEmpty, Length } from 'class-validator';
import UpdatePasswordSchema from './schemas/UpdatePasswordSchema';

export default class UpdatePassword implements UpdatePasswordSchema {
	@IsNotEmpty()
	@Length(4, 20)
	readonly password: string;

	@IsNotEmpty()
	@IsInt()
	readonly id: number;

	constructor(password: string, id: number) {
		this.password = password;
		this.id = id;
	}
}
