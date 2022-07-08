import React from 'react'
import Table from '../../Components/Table/Table'
import { BodyWrap } from './SafeDetails.styled'

const SafeDetails = () => {
    const details = [
        {    
            title: 'Security code',
            value: 'ADDD558UYDF3'
        },
        {    
            title: 'Ref',
            value: '3225886'
        },
        {    
            title: 'Depositor',
            value: 'MR. STEPHEN'
        },
        {    
            title: 'Address of depositor',
            value: 'PLOT 5 BLOCK JOAN'
        },
        {    
            title: 'Owner',
            value: 'MR. STEPHEN'
        },
        {    
            title: 'Beneficiary',
            value: 'MISS MAYRER JOAN'
        },
        {    
            title: 'Item deposited',
            value: '2 METALLIC BOX'
        },
        {    
            title: 'Item description',
            value: '2 METALLIC BOX'
        },
        {    
            title: 'Date of deposit',
            value: '2 JUNE 2001'
        },
        {    
            title: 'Purpose of deposit',
            value: 'SAFE KEEPING'
        },
        {    
            title: 'Charge per year',
            value: '$1400'
        },

        
    ]
  return (
    <BodyWrap>
        <h4>Details</h4>
        <Table data={details}/>
    </BodyWrap>
  )
}

export default SafeDetails