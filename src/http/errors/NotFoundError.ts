import HttpError from './HttpError';

export default class NotFoundError extends Error implements HttpError{
	message = 'Not Found';

	status = 404;
}
