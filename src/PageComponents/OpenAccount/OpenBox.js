import React from 'react'
import Link from 'next/link'
import { Box,Body, Wrap } from './OpenBox.styled'

const OpenBox = () => {

    const assert = [
        {
            title:'gold investment',
            amount: 2875.21,
            currency:'usd',
            min:'2000'
        },
        {
            title:'safe keeping',
            amount: 89628.75,
            currency:'usd',
            min:500,
            href:"/dashboard/account/open-account/safekeeping"
        },
        
        
    ]
  return (
    <Body>
    <Wrap>
        
        {
            assert.map(item => {
                return(
                    <div className='wrapper' key={item.title}>
                    <Box >
                        <div className='account-detail'>
                            <div className='titles'>
                                <p>{item.title}</p>
                            </div>
                            <p>Most popular! A great account for all types of individual</p>
                        </div>
                        <div className='opt'>
                            <Link href={item.href ? item.href : '#'} passHref>
                                <button>open account</button>
                            </Link>

                            <Link href='#' passHref>
                                <button>info</button>
                            </Link>
                        </div>
                    </Box>

                    <div className='details'>
                        <div>
                            <p>No commision</p>
                            <p>Minimum</p>
                            <h3>${item.min}</h3>
                        </div>
                    </div>
                    </div>
                )
            })
        }
        
        
        
    </Wrap>
</Body>
  )
}

export default OpenBox