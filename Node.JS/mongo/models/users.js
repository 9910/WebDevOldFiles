var mongoose = require('mongoose');
var schema = mongoose.schema;

var usersSchema = new schema({
  name: String
});

mongoose.model('users', usersSchema);
