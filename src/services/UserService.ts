import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import UserRepository from '../repositories/UserRepository';
import LikeRepository from '../repositories/LikeRepository';
import User from '../entities/User';
import Like from '../entities/Like';
import NewUserSchema from '../http/inputs/user/schemas/NewUserSchema';
import UpdatePasswordSchema from '../http/inputs/user/schemas/UpdatePasswordSchema';
import UserNotFoundError from '../http/errors/user/UserNotFoundError';
import UserAlreadyLikedError from '../http/errors/user/UserAlreadyLikedError';


@Service()
export default class UserService {
	private users: UserRepository;

	private likes: LikeRepository;

	constructor(@InjectRepository(User) users: UserRepository,
              @InjectRepository(Like) likes: LikeRepository) {
		this.users = users;
		this.likes = likes;
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

	async getUserWithLikes(id: number) {
		return this.users.getUserWithLikes(id);
	}

	async like(likedId: number, likedById: number) {
		const liked: User | undefined = await this.users.findOne(likedId);
		const likedBy: User = await this.users.findOne(likedById) as User;

		if (liked === undefined) throw new UserNotFoundError();

		const like = new Like();
		like.likedByUser = likedBy;
		like.userLiked = liked;
		try {
			await this.likes.save(like);
		} catch (err) {
			throw new UserAlreadyLikedError();
		}
	}

	async unlike(unliked: number, likedBy: number) {
		return this.likes.unlike(unliked, likedBy);
	}

	async getMostLikedUsers() {
		return this.users.getMostLiked();
	}
}
