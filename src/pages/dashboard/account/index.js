import React from 'react'
import Account from '../../../PageComponents/dashMain/Account'
import axios from 'axios'
import { Router } from 'next/router'

function index() {

  return (
    <div  className='dashboard'>
        <Account/>
    </div>
  )
}

// index.getInitialProps = async(ctx)=>{
//   const cookie = ctx.req?.headers.cookie

//   const response = await axios.get('http://localhost:3000/api/user',{
//     header:{
//       cookie:cookie
//     }

    
//   })

//   if(response.status === 401 && !ctx.req){
//     Router.replace('/account')
//   }

//   if(response.status === 401 && ctx.req){
//     ctx.res?.writeHead(302,{
//       Location: 'http://localhost:3000/account'
//     })
//   }




//   return response
// }

export default index

