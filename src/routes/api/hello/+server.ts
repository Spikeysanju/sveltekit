export const GET = async () => {
	console.log('Timer started for 60 secs');
	await new Promise((resolve) => setTimeout(resolve, 60000));
	console.log('Timer finished');
	return new Response(JSON.stringify({ message: 'Hello from the server!' }), {
		status: 200,
		headers: {
			'content-type': 'application/json;charset=UTF-8'
		}
	});
};
