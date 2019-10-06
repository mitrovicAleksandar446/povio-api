import { Request, Response } from 'express';
import { Container } from 'typedi';
import UserService from '../../services/UserService';
import { data, success201 } from '../responses/success';

const showUserWithLikes = async (req: Request, res: Response): Promise<object> => {
	const id = Number(req.params.id);
	const userService = Container.get<UserService>(UserService);
	const user = await userService.getUserWithLikes(id);
	return res.json(data(user));
};

const like = async (req: Request, res: Response): Promise<object> => {
	const likedBy = Number(res.locals.jwtPayload.id);
	const liked = Number(req.params.id);
	const userService = Container.get<UserService>(UserService);
	await userService.like(liked, likedBy);
	return res.status(201).json(success201('User successfully liked'));
};

const unlike = async (req: Request, res: Response): Promise<object> => {
	const likedBy = Number(res.locals.jwtPayload.id);
	const unliked = Number(req.params.id);
	const userService = Container.get<UserService>(UserService);
	await userService.unlike(unliked, likedBy);
	return res.status(204).json();
};

const showMostLikedUsers = async (req: Request, res: Response): Promise<object> => {
	const userService = Container.get<UserService>(UserService);
	const users = await userService.getMostLikedUsers();
	return res.json(data(users));
};

export {
	showUserWithLikes,
	like,
	unlike,
	showMostLikedUsers,
}
