var  mongoose = require('mongoose')
   , Schema = mongoose.Schema;


var UserSchema = new mongoose.Schema({
	username : {type: String, unique: true},
	password : String
});

module.exports = mongoose.model('User', UserSchema, "UserCollection");

/* 
var personSchema = Schema({
  _id     : Number,
  name    : String,
  age     : Number,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  _creator : { type: Number, ref: 'Person' },
  title    : String,
  fans     : [{ type: Number, ref: 'Person' }]
});

var Story  = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);
}*/