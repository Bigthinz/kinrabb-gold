import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { useRouter } from 'next/router'

const secret = process.env.JWT_SECRET

export default function middleware(req){
    const { cookies } = req

    const token = cookies.authToken

    const url = req.url

    console.log('url is here ' + url)

    

    if(url  === 'http://localhost:3000/'){
        if(token){
            
            try{
                verify(token, secret)
                return NextResponse.redirect('http://localhost:3000/dashboard/account')
    
            }catch(e){
            return NextResponse.next()
                
            }
        }
    }

    if(url.includes('/login')){
        if(token){
            
            try{
                verify(token, secret)
                return NextResponse.redirect('http://localhost:3000')
    
            }catch(e){
            return NextResponse.next()
                
            }
        }
 
        

    }

    if(url.includes('/dashboard')){
        if(token === undefined){
            return NextResponse.redirect('http://localhost:3000/login')
        }

        try{
            const user = verify(token, secret)
            console.log(user)
            return NextResponse.next()

        }catch(e){
            return NextResponse.redirect('http://localhost:3000/login')

        }
        return NextResponse.next()

    }
    
}