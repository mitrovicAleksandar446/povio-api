import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import UserRepository from '../repositories/UserRepository';
import User from '../entities/User';
import NewUserSchema from '../http/inputs/user/schemas/NewUserSchema';
import UpdatePasswordSchema from '../http/inputs/user/schemas/UpdatePasswordSchema';

@Service()
export default class UserService {
	private users: UserRepository;

	constructor(@InjectRepository(User) users: UserRepository) {
		this.users = users;
	}

	async create(newUser: NewUserSchema): Promise<boolean> {
		const user = new User();
		user.username = newUser.username;
		user.password = newUser.password;
		user.hashPassword();
		await this.users.save(user);
		return true;
	}

	get(userId: number): Promise<User | undefined> {
		return this.users.findOne(userId);
	}

	async updateUserPassword(update: UpdatePasswordSchema) {
		const user: User = await this.users.findOne(update.id) as User;
		user.password = update.password;
		user.hashPassword();
		await this.users.save(user);
	}
}
