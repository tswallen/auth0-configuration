function (user, context, callback) {
    var namespace = 'http://dev.medshorts.com/api/';
    if (context.idToken && user.user_metadata) {
       context.idToken[namespace + 'user_metadata'] = user.user_metadata;
     }
  	if (context.idToken && user.user_metadata) {
      context.idToken[namespace + 'app_metadata'] = user.app_metadata;
     }
   callback(null, user, context);
 }