import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Side, Wrap } from './SideNav.styled'

const SideNav = () => {

  const router = useRouter()

  const links = [
    {
      title:'account',
      icon:'/icons/account.png',
      href:'/dashboard/account'
    },
    {
      title:'transaction',
      icon:'/icons/transaction.png',
      href:'#'
    },
    {
      title:'tracking',
      icon:'/icons/tracking.png',
      href:'#'
    },
    {
      title:'safe keeping',
      icon:'/icons/keeping.png',
      href:'/dashboard/safe-keeping'
    },
    {
      title:'settings',
      icon:'/icons/settings.png',
      href:'/dashboard/settings'
    },

  ]
  return (
    <Side>
      <Wrap>
          {
            links.map(link => {
              return(
                <Link href={link.href} key={link.title} passHref>
                <div className={`link-tab ${
                  router.pathname === link.href ? 'active': ''
                }`}>
                    <div>
                  <div className='link-img'>
                    <Image src={link.icon} alt='logo'  width={20} height={20} objectFit='cover' priority/> 
                  </div>
                  <p>{link.title}</p>
                  </div>
                </div>
                </Link>
              )
            })
          }
      </Wrap>
    </Side>
  )
}

export default SideNav