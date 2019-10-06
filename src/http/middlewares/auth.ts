import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { secret as jwtSecret } from '../../../config/jwt';
import { error } from '../responses/errors';

export default (req: Request, res: Response, next: NextFunction): Response | void => {
	const token: string = req.headers.authorization as string;

	try {
		jwt.verify(token, jwtSecret);
	} catch (err) {
		res.status(401).json(error('Unauthorized'));
		return;
	}

	next();
}
