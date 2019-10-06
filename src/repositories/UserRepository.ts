import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import User from '../entities/User';

@EntityRepository(User)
@Service()
export default class UserRepository extends Repository<User> {
	getUserWithLikes(id: number): Promise<User | undefined> {
		return this.createQueryBuilder('u')
			.where('u.id = :id', { id })
			.loadRelationCountAndMap('u.num_of_likes', 'u.likes')
			.select('u.username')
			.getOne();
	}

	getMostLiked(): Promise<User> {
		return this.createQueryBuilder('u')
			.leftJoin('likes', 'l', 'u.id = l.liked')
			.select('u.id, u.username, count(l.liked) as num_of_likes')
			.orderBy('num_of_likes', 'DESC')
			.groupBy('u.id')
			.execute();
	}
}
