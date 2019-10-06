import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import Like from '../entities/Like';

@EntityRepository(Like)
@Service()
export default class LikeRepository extends Repository<Like> {
	unlike(unliked: number, likedBy: number): Promise<DeleteResult> {
		return this.createQueryBuilder()
			.where('likes.liked_by = :likedBy and likes.liked = :unliked', { likedBy, unliked })
			.delete()
			.execute();
	}
}
