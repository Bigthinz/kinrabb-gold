import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'





const openSafeSchema = new mongoose.Schema({
	active:{
		type:Boolean,
		default: true,
		select: false
	},
	
	createdAt:{
		type:Date,
		default:Date.now()
	},
	safe:{
		type: mongoose.Schema.ObjectId,
		ref: 'safeKeeping',
		required: [true, 'safe must belong to a tour']
	},
	user:{
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: [true, 'Review must belong to a user']
	}

},
{
	toJSON:{virtuals:true},
	toObject:{virtuals:true}
})




module.exports = mongoose.models.openSafe || mongoose.model('OpenSafe', openSafeSchema) 