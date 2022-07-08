import mongoose from 'mongoose'
import validator from 'validator'
const { Schema } = mongoose;

import User from './User'

const safeKeepingSchema = new mongoose.Schema({
    title: {
        type:String,
		required:[true, ''],
		unique:false,
        default: 'safe keeping',
    },
    userId: {
        type:mongoose.Schema.ObjectId,
		ref:'User',
		required:[true, 'user id is needed'],
        unique:true

    },
    securityCode: {
        type:String,
		required:[true, ''],
		unique:false
    },

    ref: {
        type:String,
		required:[true, ''],
		unique:true
    },
    depositer: {
        type:String,
		required:[true, ''],

    },
    addressOfDepositor: {
        type: String,
        required:[true, ''],

    },
    itemDeposited: {
        type: String,
        required:[true, ''],

    },
    itemDescription: {
        type: String,
        required:[true, ''],

    },
    dateDeposited: {
        type: String,
        type: Date,
        default: Date.now(),

    },
    owner: {
        type: String,
        required:[true, ''],

    },
    chargePerYear: {
        type: String,
        required:[true, ''],

    },
    beneficiary: {
        type: String,
        required:[true, ''],

    },
    purposeOfDeposite: {
        type: String,
        required: [true, ''],
    },
    
	active:{
		type:Boolean,
		default: true,
		select: false
	},
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    // toJSON:{virtuals:true},
	// toObject:{virtuals:true}
})



module.exports = mongoose.models.SafeKeeping || mongoose.model('SafeKeeping', safeKeepingSchema) 