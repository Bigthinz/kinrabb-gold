import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

import { useRouter } from 'next/router'

import Button from '../Button/Button'
import { Forms, Wrap } from './Form.styled'

const LoginForm = () => {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [ password, setPassword ] = useState('')


    const handleForm = async(e)=>{

        e.preventDefault()
        const options={
            email:email,
            password:password
        }

        const response = await axios.post('http://localhost:3000/api/login',options)

        if(response){

            if(response.status === 200 || response.status === 201){
                console.log({'res-data':response.data})
                router.push('http://localhost:3000/dashboard/account')
            }

        }
    }


    const handleChange = (e)=>{
        e.preventDefault()
        setEmail(e.target.value)
    }


  return (
    <Wrap>
        
        <Forms>
            <div className='form-wrap'>
                <form onSubmit={handleForm}>
                    <h3>Login</h3>
                    
                    <div className='input-box'>
                        <input 
                        type='email' 
                        placeholder='Email' 
                        value={email}
                        onChange={handleChange}
                        name='email'
                        required
                        />
                    </div>
                    <div className='input-box'>
                        <input 
                        type='password' 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(
                            e.target.value)}
                        name='password'
                        required
                        />
                    </div>
                    
                    {/* <p>Agree with terms and conditions of User</p> */}
                    <p className="create-regis">Not a registered? <Link href='/signup' passHref ><a className='link'>Sign up</a></Link></p>
                    <div>
                      <Button text='login'/>
                    </div>
                </form>
            </div>
        </Forms>
    </Wrap>
  )
}

export default LoginForm