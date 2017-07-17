var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	userId: {
		type: String
	},
	mobile: {
		type: String,
		required: 'Kindly Enter Mobile Number'
	},
	fName: {
		type: String,
		required: 'Enter First Name'
	},
	mName: {
		type: String,
		default: null
	},
	lName: {
		type: String,
		required: 'Enter Last Name'
	},
	dob: {
		type: Date,
		default: null
	},
	emailId: {
		type: String,
		default: null
	},
	addedDate: {
		type: Date,
		default: Date.now
	},
	updatedDate: {
		type: Date,
		default: Date.now
	},
	panCard: {
		type: String,
		default: null
	},
	userType: {
		type: String,
		required: 'Pass UserType'
	},
	tinNumber: {
		type: String,
		default: null
	}
});

module.exports = mongoose.model('users', userSchema);