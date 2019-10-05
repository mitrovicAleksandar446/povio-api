import {
	Entity,
	JoinColumn,
	Unique,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import User from './User';

@Entity({ name: 'likes' })
@Unique(['likedByUser', 'userLiked'])
export default class Like {
	@PrimaryGeneratedColumn()
	id!: number;

	@IsNotEmpty()
	@ManyToOne(type => User, user => user.liked)
	@JoinColumn({ name: 'liked_by' })
	likedByUser!: User;

	@IsNotEmpty()
	@ManyToOne(type => User, user => user.likes)
	@JoinColumn({ name: 'liked' })
	userLiked!: User;
}
