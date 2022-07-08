import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
import jwt  from 'jsonwebtoken'
import AppError from '../../../utils/AppError'
import catchAsync from '../../../utils/catchAsync'
import cookie from 'cookie'
import { ApiError } from 'next/dist/server/api-utils';
import createSendToken from '../../../helpers/sendToken'


export default async function login (req, res,next){

    const {method} = req

   await dbConnect()


    if(method === 'POST'){

        const { email, password } = req.body

            try{
            console.log(email,password)
            if (!email || !password) {
                return 
            }
        
            // 2) Check if user exit or password is correct
            const user = await User.findOne({ email }).select('+password')
                console.log(user)
        
            //calling the global method correctPassword difine in the userModel without use require() cuz is available on all documents 
            // const correct = await user.correctPassword(password, user.password)
            // console.log(correct)
        
            if (!user || !(await user.correctPassword(password, user.password))) {
                throw new AppError('Invalid password or email', 401)
            }

            
        
            createSendToken(user, 200, res)


        }catch(err){
            res.status(400).json({ error:err})
        }
        
       
    }    
}



