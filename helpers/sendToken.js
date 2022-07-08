import cookie from 'cookie'
import jwt  from 'jsonwebtoken'



export const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_IN })
}


 const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id)

    //setting up cookies
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000),
        httpOnly: true,
        path:'/'
    }

    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true

    res.setHeader('Set-Cookie', cookie.serialize('authToken', token, cookieOptions))    

    // res.cookie('jwt', token, cookieOptions)
        //end of cookies

    //removing passoword form output when user sign up....
    // user.password = undefined

    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            user
        }
    })
}

export default createSendToken