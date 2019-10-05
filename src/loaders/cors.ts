import { Application } from 'express';
import cors from 'cors';

export default (app: Application): void => {
	const corsOptions: object = {
		methods: ['GET', 'POST', 'PATCH'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	};
	app.use(cors(corsOptions))
}
