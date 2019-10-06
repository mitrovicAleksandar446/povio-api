import { Request, Response, NextFunction } from 'express';
import { basicError } from '../responses/errors';

const catchErrors = (fn: Function) =>
	// eslint-disable-next-line no-mixed-spaces-and-tabs,implicit-arrow-linebreak
	 (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next);

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
	const errorDetails = basicError(err.message, err.status || 500);
	return res.status(err.status || 500).json(errorDetails);
};

const notFound = (req: Request, res: Response, next: NextFunction) => {
	const err: any = new Error('Not Found');
	err.status = 404;
	next(err);
};

export {
	catchErrors,
	errorHandler,
	notFound,
}
