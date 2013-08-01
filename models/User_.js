var  mongoose = require('mongoose')
   , Schema = mongoose.Schema
   , Message = require('./Message_');


var UserSchema = new mongoose.Schema({
  username: {type: String},
  password: {type: String},
  name: {
  	first:  {type: String},
    last:   {type: String}
  }, 
  email: { type: String, unique: true,
   validate: /^[\w\.%\+\-]+@(?:[A-Z0-9\-]+\.)+(?:[A-Z]{2,6})$/i
  },
  gender: {
  	type: String, enum: ['male', 'female'], default: null
  },
  city: {type: String},
  country: {type: String},
  accoutnts: [],
  created: {type: Date, default: Date.now},
  lastActive:{type: Date},
  online: {type: Boolean},
  hidden: {type: Boolean},
  avatar: {type: String, validate: /^(((http|https):\/\/)?([[a-zA-Z0-9]\-\.])+(\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]\/+=%&_\.~?\-]*))*$/
  },
  facebook: {type: String, validate: /^(((http|https):\/\/)?([[a-zA-Z0-9]\-\.])+(\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]\/+=%&_\.~?\-]*))*$/
  },
  vk: {type: String, validate: /^(((http|https):\/\/)?([[a-zA-Z0-9]\-\.])+(\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]\/+=%&_\.~?\-]*))*$/
  },
  google: {type: String, validate: /^(((http|https):\/\/)?([[a-zA-Z0-9]\-\.])+(\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]\/+=%&_\.~?\-]*))*$/
  },
  twitter: {type: String, validate: /^(((http|https):\/\/)?([[a-zA-Z0-9]\-\.])+(\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]\/+=%&_\.~?\-]*))*$/
  },
  followers: [{type: Schema.Types.ObjectId, ref: 'User' }],
  follow: [{type: Schema.Types.ObjectId, ref: 'User' }],
  msg: [Message],
  chatMsg: [{ src: {type: Schema.Types.ObjectId, ref: 'User' },
              dst: {type: Schema.Types.ObjectId, ref: 'User' },
              message: {type: String},
              created: {type: Date, default: Date.now}}]
});

module.exports = mongoose.model('User', UserSchema, "Users");
