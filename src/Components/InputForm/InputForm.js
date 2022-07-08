import React, {useState} from 'react'
import { Forms } from './InputForm.styled'

const InputForm = ({label, type}) => {


    const [email, setEmail] = useState('')
    const [ password, setPassword ] = useState('')


    

    const handleChange = (e)=>{
        e.preventDefault()
        setEmail(e.target.value)
    }

  return (
    <Forms>
       
        <div className='input-box'>
            <p>{label}</p>
            <input 
            type={type} 
            value=''
            onChange={handleChange}
            name={label}
            required
            />
        </div>
       
       
    </Forms>
  )
}

export default InputForm