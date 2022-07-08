import React from 'react'
import Button from '../../Components/Button/Button'
import InputForm from '../../Components/InputForm/InputForm'
import {Body, Wrap } from './SafeForm.styled'
import { motion } from 'framer-motion'

const SafeForm = () => {

    const data = [
        {
            title:'security code',
            value:'Addo98769',
            type:'string'
        },
        {
            title:'ref',
            value:'34642344',
            type:'string'
        },

      
    ]

    const data2 = [
        {
            title:'depositer',
            value:'Addo98769',
            type:'string'
        },
        {
            title:'address of depositor',
            value:'34642344',
            type:'string'
        },
        {
            title:'purpose of deposite',
            value:'Addo98769',
            type:'string'
        },

      
    ]

    const data3 = [
        {
            title:'item deposited',
            value:'Addo98769',
            type:'string'
        },
        {
            title:'item description',
            value:'34642344',
            type:'string'
        },
        {
            title:'date deposited',
            value:'Addo98769',
            type:'string'
        },
      
    ]

    const data4 = [
        {
            title:'owner',
            value:'Addo98769',
            type:'string'
        },
        {
            title:'charge per year ',
            value:'34642344',
            type:'string'
        },
        {
            title:'beneficiary',
            value:'Addo98769',
            type:'string'
        },
      
      
    ]
  return (
    <div>
        <Body>
            <form>
            <Wrap>
            <div className='parts'>
                
            <div className='account-detail'>
                <div className='title'>
                    <h4>information</h4>
                </div>
                <p>Most popular! A great account for all types of individual</p>
            </div>
                {
                    data.map(item => {
                        return (
                            <InputForm key={item.label} label={item.title} />

                        )
                    })
                }

                </div>
                
            <div className='parts'>

            <div className='account-detail'>
                <div className='title'>
                    <h4>Personal info</h4>
                </div>
                {/* <p>Most popular! A great account for all types of individual</p> */}
            </div>
                {
                    data2.map(item => {
                        return (
                            <InputForm key={item.label} label={item.title} />

                        )
                    })
                }
                </div>

            <div className='parts'>

            <div className='account-detail'>
                <div className='title'>
                    <h4>Address details</h4>
                </div>
                <p>Most popular! A great account for all types of individual</p>
            </div>
                {
                    data3.map(item => {
                        return (
                            <InputForm key={item.label} label={item.title} />

                        )
                    })
                }
            </div>

            <div className='parts'>

            <div className='account-detail'>
                <div className='title'>
                    <h4>Address details</h4>
                </div>
                <p>Most popular! A great account for all types of individual</p>
            </div>
                {
                    data4.map(item => {
                        return (
                            <InputForm key={item.label} label={item.title} />

                        )
                    })
                }
            </div>

            



                
            </Wrap>
            <div className='btn'>
                <motion.div
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                >
                <Button text='Create account'/>
                </motion.div>
            </div>
            </form>
        </Body>
    </div>
  )
}

export default SafeForm