import React, { Children, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Board from '../Board/Board'
import BoardHead from '../BoardHead/BoardHead'
import SideNav from '../SideNav/SideNav'
import TopNav from '../TopNav/TopNav'
import { BoardWrap, BodyWrap, ChildContainer, Wrap } from './Body.styled'
import { motion } from 'framer-motion'

const Body = ({children}) => {

    const router = useRouter()
    let path

    const pageUrl = router.pathname

   if( pageUrl === '/dashboard/settings'){
  
        path ={
            title:{
                title:'Profile'
            },
            tabs:[
                'profile'
            ]
        }
        
   
   }

   if( pageUrl === '/dashboard/account/open-account'){
  
    path ={
        title:{
            title:'open new account'
        },
        tabs:[
            'standard'
        ],
        account:false
    }
    

}

   if( pageUrl === '/dashboard/safe-keeping'){
  
    path ={
        title:{
            title:'safe keeping'
        },
        tabs:[
            'active'
        ]
    }
    

}

   console.log(path)

   if( pageUrl === '/dashboard/account'){
    
        path = {
            title:{
                title: 'my account'
            },
            tabs:[
                'active',
                'archive'
            ]
        }
    
    
}





  return (
    
    <BodyWrap>
        <TopNav/>
        <Wrap>
          <SideNav/>
          
          <Board>
              <BoardWrap>
                  <BoardHead title={path ? path.title.title : ''} tab={path && path.tabs} account={path ? path.account: ''} />
                  <motion.div exit={{opacity: 0}} initial={{opacity:0}} animate={{opacity:1}}>
                    <ChildContainer>
                        {children}
                    </ChildContainer>
                    </motion.div>
                  
              </BoardWrap>
          </Board>
          
        </Wrap>
    </BodyWrap>
  )
}

export default Body