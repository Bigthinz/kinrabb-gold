import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import APIFeatures from '../../../utils/apiFeatures'
import createSendToken from '../../../helpers/sendToken'


export default async function handler (req, res){

    const {method} = req

   await dbConnect()

    if(method === 'GET'){
        try{
            // const user = await User.find()

            // user[0].password = undefined
            

            // res.status(200).json({
            //     status:'sucess',
            //     length: user.length,
            //     data:{
            //         user
            //     }
            // })

            let filter = {}
		//if filter is null it will display all reviews
       
            const features = new APIFeatures(User.find(filter),req.query)
						.filter()
						.sort()
						.fieldLimit()
						.paginate()

		//query.explain() at the end helps  view the query performance on each query 
		// const doc = await features.query.explain()
		const doc = await features.query
       doc.password = undefined
		
		res.status(200).json({
			status:'sucess',
			result: doc.length,
			data:{
				data:doc
				}
			})
        }catch(err){
            res.status(400).json({ error:err})
        }
    }

    if(method === 'POST'){
        try{
            const user = await User.create(req.body)
           
            // const token = signToken(user._id)
            
            // // createSendToken(user, 201, res)

            // res.status(201).json({
            //     status:'sucess',
            //     // token,
            //     data:{
            //         user
            //     }
            // })

            createSendToken(user, 201, res)
        
        }catch(err){
            res.status(400).json({ error:err})
        }
    }


    
}


// export const signToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_IN })
// }


// export const createSendToken = (user, statusCode, res) => {
//     const token = signToken(user._id)

//     //setting up cookies
//     const cookieOptions = {
//         expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000),
//         httpOnly: true
//     }

//     if (process.env.NODE_ENV === 'production') cookieOptions.secure = true

//     res.setHeader('Set-Cookie', cookie.serialize('jwt', token, cookieOptions))    

//     // res.cookie('jwt', token, cookieOptions)
//         //end of cookies

//     //removing passoword form output when user sign up....
//     // user.password = undefined

//     res.status(statusCode).json({
//         status: "success",
//         token,
//         data: {
//             user
//         }
//     })
// }


// // export default user