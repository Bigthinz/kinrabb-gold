import React, {useState} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import Link from 'next/link'
import Button from '../Button/Button'
import { Forms, Wrap } from './Form.styled'
import string from '../../../utils/string'



const Form = () => {

    const router = useRouter()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')


    const handleForm = async(e)=>{
        e.preventDefault()
        const options={
            firstname:firstName,
            lastname:lastName,
            email:email,
            password:password,
            confirmPassword:confirm
        }

        const response = await axios.post('http://localhost:3000/api/user',options)

        console.log(response)

        if(response){

            if(response.status === 200 || response.status === 201){
                console.log({'res-data':response.data})

                // let randString = string.rand({ length : 64, });
                // sessionStorage.setItem('reg-rs--sad', randString)
                // router.push(`http://localhost:3000/account?src=${randString}`)
                router.push('http://localhost:3000/dashboaed/account')
            }

        }
    }


    const handleChange = (e)=>{
        e.preventDefault()

        if(e.target.name === 'firstname'){
            setFirstName(e.target.value)
        }
        if(e.target.name === 'lastname'){
            setLastName(e.target.value)
        }
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }
        if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
        if(e.target.name === 'confirmPassword'){
            setConfirm(e.target.value)
        }
      

    }

  return (
    <Wrap>
        
        <Forms>
            <div className='form-wrap'>
                <form onSubmit={handleForm}>
                    <h3>Register</h3>
                    <div className='flex-input'>
                    <div className='input-box'>
                        <input 
                        type='text' 
                        placeholder='First name'
                        value={firstName}
                        onChange={handleChange}
                        name='firstname'
                        required
                        />
                    </div>
                    <div className='input-box'>
                        <input 
                        type='text' 
                        placeholder='Last name'
                        value={lastName}
                        onChange={handleChange}
                        name='lastname'
                        required
                        />
                    </div>
                    </div>
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
                        onChange={handleChange}
                        name='password'
                        required
                        />
                    </div>
                    <div className='input-box'>
                        <input 
                        type='password' 
                        placeholder='Confirm password' 
                        value={confirm}
                        onChange={handleChange}
                        name='confirmPassword'
                        required
                        />
                    </div>
                    {/* <p>Agree with terms and conditions of User</p> */}
                    <p className="create-regis">Already a member? <Link href='/login' passHref ><a className='link'>Sign in</a></Link></p>
                    <div>
                      <Button text='Create my Kinrabb account'/>
                    </div>
                </form>
            </div>
        </Forms>
    </Wrap>
  )
}

export default Form