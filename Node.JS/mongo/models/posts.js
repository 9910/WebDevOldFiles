var mongoose = require('mongoose');
var schema = mongoose.schema;

var postsSchema = new schema({
  content: String,
  user: {
    type: String,
    ref: 'users'
  }
});

mongoose.model('posts', postsSchema);
