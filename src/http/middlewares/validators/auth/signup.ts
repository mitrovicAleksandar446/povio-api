import { check } from 'express-validator';

export default [
	check('username')
		.not()
		.isEmpty()
		.withMessage('Username is empty')
		.bail()
		.isLength({ min: 5, max: 20 })
		.withMessage('Username must be 5 to 20 characters long'),
	check('password')
		.not()
		.isEmpty()
		.withMessage('Password is empty')
		.bail()
		.isLength({ min: 4, max: 20 })
		.withMessage('Password must be 4 to 20 characters long'),
]
