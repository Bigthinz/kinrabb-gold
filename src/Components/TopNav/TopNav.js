import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { TopNavi, Wrap, } from './TopNav.styled'


const TopNav = () => {
  const router = useRouter()
  const path = router.pathname;


  return (
    <TopNavi>
        <Wrap>
          <div className='logo'>
            <Link href='/' passHref>
              <a><Image src='/images/logo-sm.png' alt='logo'  width={50} height={50} objectFit='contain' priority/></a>
            </Link>
          </div>
          {
              path === '/login' ||  path === '/signup'?
               ""
              :
              (
                <div className='nav-option'>
                  
                  <div className='logo'>
                    <Image src='/icons/user.png' alt='logo'  width={20} height={20} objectFit='cover' priority/>
                  </div>
  
                  <div className='logo'>
                    <Image src='/icons/bell.png' alt='logo'  width={20} height={20} objectFit='cover' priority/>
                  </div>
                </div>
                )
            }
        </Wrap>
    </TopNavi>
  )
}

export default TopNav