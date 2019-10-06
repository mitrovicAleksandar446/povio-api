export default class UserNotFoundError extends Error {
	status = 404;

	message = 'User Not Found';
}
