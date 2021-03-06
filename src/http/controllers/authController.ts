import { Request, Response } from 'express';
import { Container } from 'typedi';
import { validationResult } from 'express-validator';
import UserService from '../../services/UserService';
import NewUser from '../inputs/user/NewUser';
import { success201, data } from '../responses/success';
import UserLogin from '../inputs/user/UserLogin';
import AuthService from '../../services/AuthService';
import UpdatePassword from '../inputs/user/UpdatePassword';

const signUp = async (req: Request, res: Response): Promise<object> => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) return res.status(422).json(errors);

	const { password, username } = req.body;
	const user = new NewUser(password, username);
	const userService = Container.get<UserService>(UserService);
	await userService.create(user);
	return res.status(201).json(success201('You have successfully signed up'));
};

const login = async (req: Request, res: Response): Promise<object> => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) return res.status(422).json(errors);

	const { password, username } = req.body;
	const credentials = new UserLogin(password, username);
	const authService = Container.get<AuthService>(AuthService);
	const token = await authService.createTokenFor(credentials);
	return res.json({ token, status: 200, expiresIn: 3600 });
};

const me = async (req: Request, res: Response): Promise<object> => {
	const userId = res.locals.jwtPayload.id;
	const userService = Container.get<UserService>(UserService);
	const user = await userService.get(userId);
	return res.json(data(user));
};

const updatePassword = async (req: Request, res: Response): Promise<object> => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) return res.status(422).json(errors);

	const { password } = req.body;
	const userId = res.locals.jwtPayload.id;
	const update = new UpdatePassword(password, userId);
	const userService = Container.get<UserService>(UserService);
	await userService.updateUserPassword(update);
	return res.status(204).json();
};

export {
	signUp,
	login,
	me,
	updatePassword,
}
