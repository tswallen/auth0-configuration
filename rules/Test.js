function (user, context, callback) {
	console.log(`Test: ${JSON.stringify(configuration)}`);
   callback(null, user, context);
}