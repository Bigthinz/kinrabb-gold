import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
		required:[true, 'first name is required in this field'],
		unique:false
    },
    lastname: {
        type:String,
		required:[true, 'last name is required in this field'],
		unique:false
    },
    email: {
        type:String,
		required:[true, 'An Email is required in this field'],
		unique:true,
		lowercase:true,
		validate: [validator.isEmail]
    },
    password: {
        type: String,
        required:[true, 'Provide a valid password'],

    },
    confirmPassword: {
        type: String,
        required: [true, 'Please provide a valid password'],
        validate:{
			//THIS ONLY WORKS ON CREATING AND SAVING
			validator: function(el){
				return el === this.password
			},
			message:'Password does not match' 
		}

    },
    passwordResetToken:String,
	passwordResetExpires: Date,
	photo:String,
	role:{
		type:String,
		enum:['user', 'guide', 'lead-guide', 'admin'],
		default:'user'
	},
    passwordChangedAt: Date,
	active:{
		type:Boolean,
		default: true,
		select: false
	}
})


userSchema.pre('save', async function(next){
	//ONLY RUN IF THE PASSWORD WAS ACTUALLY MODIFIED
	if(!this.isModified('password')) return next()
	
	//HASH THE PASSWORD WITH A COST OF 12
	this.password = await bcrypt.hash(this.password,12)	
	//DELETE THE PREVIOUS CONFIRMED PASSWORD
	this.confirmPassword = undefined

	next()
})

//CREATING a METHOD FOR LOGIN THAN IS AVAILABLE TO ALL DOCUMENTS HENCE CAN BE CALLED WITH USE REQUIRE()
userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
	return await bcrypt.compare(candidatePassword, userPassword)
}

module.exports = mongoose.models.User || mongoose.model('User', userSchema) 