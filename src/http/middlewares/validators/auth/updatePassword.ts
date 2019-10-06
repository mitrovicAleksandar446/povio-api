import { check } from 'express-validator';

export default [
	check('password')
		.not()
		.isEmpty()
		.withMessage('Password is empty')
		.bail()
		.isLength({ min: 4, max: 20 })
		.withMessage('Password must be 4 to 20 characters long'),
]
