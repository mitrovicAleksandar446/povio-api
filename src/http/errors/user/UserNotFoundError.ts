import HttpError from '../HttpError';

export default class UserNotFoundError extends Error implements HttpError {
	status = 404;

	message = 'User Not Found';
}
