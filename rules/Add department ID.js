function (user, context, callback) {
  user.user_metadata = user.user_metadata || {};
  user.user_metadata.departmentID = "123";
  context.samlConfiguration.mappings = {
    //Attribute already in user_metadata
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/departmentID": "user_metadata.departmentID",
  };
  console.log(context.samlConfiguration);
  callback(null, user, context);
}