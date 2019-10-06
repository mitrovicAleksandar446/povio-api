export const basicError = (message: string, status: number = 500) => ({ message, status });

export const error401 = () => basicError('Unauthorized', 401);
