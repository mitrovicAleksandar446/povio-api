import HttpError from '../HttpError';

export default class UserAlreadyLikedError extends Error implements HttpError {
	message = 'User already liked';

	status = 400;
}
