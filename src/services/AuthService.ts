import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import * as jwt from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository';
import User from '../entities/User';
import UserLoginSchema from '../http/inputs/user/schemas/UserLoginSchema';
import { secret } from '../../config/jwt';
import UserNotFoundError from '../http/errors/user/UserNotFoundError';

@Service()
export default class AuthService {
	private users: UserRepository;

	constructor(@InjectRepository(User) users: UserRepository) {
		this.users = users;
	}

	async createTokenFor(userLogin: UserLoginSchema) {
		const user: User | undefined = await this.users.findOne({ where: { username: userLogin.username }, select: ['id', 'password'] });
		if (!user) throw new UserNotFoundError();

		if (!user.checkIfPasswordIsValid(userLogin.password)) throw new UserNotFoundError();

		return jwt.sign(
			{ id: user.id },
			secret,
			{ expiresIn: '1h' },
		);
	}
}
