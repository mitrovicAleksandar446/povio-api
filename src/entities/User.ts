import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	Unique,
	OneToMany,
} from 'typeorm';
import { Length, IsNotEmpty } from 'class-validator';
import * as bcrypt from 'bcryptjs';
import Like from './Like';

@Entity({ name: 'users' })
@Unique(['username'])
export default class User {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ length: 20 })
	@Length(5, 20)
	@IsNotEmpty()
	username!: string;

	@Column({ length: 100 })
	@Length(5, 100)
	@IsNotEmpty()
	password!: string;

	@OneToMany(type => Like, like => like.userLiked)
	likes!: Array<Like>;

	@OneToMany(type => Like, like => like.likedByUser)
	liked!: Array<Like>;

	hashPassword(): void {
		this.password = bcrypt.hashSync(this.password, 8);
	}

	checkIfUnencryptedPasswordIsValid(password: string): boolean {
		return bcrypt.compareSync(password, this.password);
	}
}
