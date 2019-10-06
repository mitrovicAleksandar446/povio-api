import HttpError from '../HttpError';

export default class UserAlreadyExistError extends Error implements HttpError {
	message = 'User already exist with provided username';

	status = 400;
}
