import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { validationResult } from 'express-validator';
import UserService from '../../services/UserService';
import NewUser from '../inputs/user/NewUser';
import { success201 } from '../responses/success';

const signUp = async (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) return res.status(422).json(errors);

	const { password, username } = req.body;
	const user = new NewUser(password, username);
	const userService = Container.get<UserService>(UserService);
	await userService.create(user);
	return res.status(201).json(success201('You have successfully signed up'));
};

const login = (req: Request, res: Response) => {
	//
};

export {
	signUp,
	login,
}
