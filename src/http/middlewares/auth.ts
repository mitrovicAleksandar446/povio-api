import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { secret as jwtSecret } from '../../../config/jwt';
import { error401 } from '../responses/errors';

export default (req: Request, res: Response, next: NextFunction): Response | void => {
	const authorizationHeader: string | undefined = req.headers.authorization;

	if (authorizationHeader === undefined) {
		res.status(401).json(error401());
		return;
	}

	const token: string = authorizationHeader.split(' ')[1].trim();

	try {
		res.locals.jwtPayload = jwt.verify(token, jwtSecret);
	} catch (err) {
		res.status(401).json(error401());
		return;
	}

	next();
}
