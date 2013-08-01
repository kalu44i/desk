var  mongoose = require('mongoose')
   , Schema = mongoose.Schema;


var MessageSchema = new mongoose.Schema({
	title: { type: String, required: true},
 	body: { type: String, required: true},
 	comments:[{user: { type : Schema.Types.ObjectId, ref : 'User' },
    		created: { type: Date, default: Date.now },
    		body: {type: String, require: true}
    }],
  	created: { type: Date, default: Date.now },
  	tags: [{ tag: String}],
  	hidden: Boolean,
  	meta: {
    	votes: Number,
    	favs:  Number
  	}
});

module.exports = mongoose.model('Message', MessageSchema, "Messages");