export const success = (message: string, status: number = 200) => ({ message, status });

export const success201 = (message: string) => success(message, 201);

export const data = (obj: object | null | undefined) => ({
	data: obj || {},
	status: 200,
});
