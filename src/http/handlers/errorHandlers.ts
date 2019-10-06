import { Request, Response, NextFunction } from 'express';
import { basicError } from '../responses/errors';
import HttpError from '../errors/HttpError';
import NotFoundError from '../errors/NotFoundError';

const catchErrors = (fn: Function) =>
	// eslint-disable-next-line no-mixed-spaces-and-tabs,implicit-arrow-linebreak
	 (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next);

const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
	const errorDetails = basicError(err.message, err.status || 500);
	return res.status(err.status || 500).json(errorDetails);
};

const notFound = (req: Request, res: Response, next: NextFunction) => {
	next(new NotFoundError());
};

export {
	catchErrors,
	errorHandler,
	notFound,
}
