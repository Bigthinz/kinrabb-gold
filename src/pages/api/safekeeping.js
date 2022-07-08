import dbConnect from '../../../utils/dbConnect'
import SafeKeeping from '../../../models/SafeKeeping'
import User from '../../../models/User'

import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import APIFeatures from '../../../utils/apiFeatures'
import createSendToken from '../../../helpers/sendToken'



export default async function safeKeeper (req, res){

    const {method} = req

    await dbConnect()

    
    if(method === 'POST'){

        const data = req.body
        const email = req.body.email
        

        try{
            
        const checkUser = await User.findOne({email})
        console.log(checkUser._id)
       
        if(!checkUser){
            return 
        }
        
        console.log(checkUser._id)
        req.body.userId = checkUser._id

       
        const user = await SafeKeeping.create(req.body)

        res.status(201).json({
            status: "success",
            data: {
                user
            }
        })

        }catch(err){
            console.log('cannot submit the request')
            res.status(400).json({ error:err})
		    // return next(new AppError('There was an error sending email!!'))
        }

    }


    if(method === 'GET'){

        try{
        const data = await SafeKeeping.find()

        res.status(200).json({
            status: "success",
            length: data.length,
            data: {
                data
            }
        })

        }catch(err){
            console.log('cannot submit the request')
            res.status(400).json({ error:err})
		    // return next(new AppError('There was an error sending email!!'))
        }

    }

}