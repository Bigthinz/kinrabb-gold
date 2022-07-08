import React from 'react'
import Link from 'next/link'
import { Body, Box, Wrap } from './AccountBox.styled'

const AccountBox = () => {
    const assert = [
        {
            title:'investment',
            amount: 2875.21,
            currency:'usd'
        },
        {
            title:'safe keeping',
            amount: 89628.75,
            currency:'usd'
        },
        {
            title:'gold keeping',
            amount: 8978928.75,
            currency:'usd'
        },
        
        
    ]

  return (
    <Body>
        <Wrap>
            {
                assert.map(item => {
                    return(
                        <Box key={item.title}>
                            <div className='account-detail'>
                                <p>{item.title}</p>
                                <p><span className='amount'>{item.amount.toString().slice(0,item.amount.toString().indexOf('.'))}</span><span>{item.amount.toString().slice(item.amount.toString().indexOf('.'))}</span><span> {item.currency}</span></p>
                            </div>
                            <div>
                                <Link href='/dashboard/account/trading' passHref>
                                    <button>performance</button>
                                </Link>

                                <Link href='#' passHref>
                                    <button>view</button>
                                </Link>
                            </div>
                        </Box>
                    )
                })
            }
            
        </Wrap>
    </Body>
  )
}

export default AccountBox