import React from 'react'
import Table from '../../Components/Table/Table'
import { BodyWrap } from './Profile.styled'

const Profile = () => {
    const personalInfo = [
        {    
            title: 'Full name',
            value: 'Mike Addo'
        },
        {    
            title: 'Country of residence',
            value: 'Ghana'
        },
        {    
            title: 'Address',
            value: 'Kumasi A.D Accra road'
        },
        
    ]


    const contact = [
        {    
            title: 'Email address',
            value: 'mi********nt@gmail.com'
        },
        {    
            title: 'Phone number',
            value: '+233*****9642'
        },
        
        
    ]



  return (
    <BodyWrap>
        <div>
            <h4>Personal Information</h4>
            <p>This is the personal information you have provided during registration. This information is not visible to other users.</p>
            <Table data={personalInfo}/>
        </div>
        <div className='contact'>
            <h4>Contact information</h4>
            <p>We will contact you using the details you have provided.</p>
            <Table data={contact}/>
        </div>
       
    </BodyWrap>
  )
}

export default Profile