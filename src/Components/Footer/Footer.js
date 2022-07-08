import React from 'react'
import Image from 'next/image'
import { FooterStyled, Links, Subscribe, Wrap } from './Footer.styled'
import Button from './../Button/Button'

const Footer = () => {
  return (
    <FooterStyled>
        <div className='footer-wrap'>
        <Image src='/images/logo-sm.png' alt='logo'  width={70} height={70} objectFit='contain' priority/>

        <Wrap className='wrap'>
            <div className='company-desc'>

                {/* <Image src='#' alt='logo' width={100} height='100' /> */}
                <h2>kinrabb gold security</h2>
                <p>Our company offers services to Importers as well as Exporters for movement of their goods(Gold bars,beverages,cars,etc) by Sea, Air and Land. </p>
                <p>info@kinrabb.com</p>
                <p>+2334567643</p>
            </div>

            <Links>
                <div className='quick-links'>
                    <h3>Quick links</h3>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                        <li>Terms of use</li>

                    </ul>   
                </div>

                <div className='about'>
                    <h3>About</h3>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                        <li>Terms of use</li>

                    </ul>   
                </div>
            </Links>

            <Subscribe>
                <div className='wrap'>
                    <div className='input-wrap'>
                        <input type='text' placeholder='Enter your email' />
                        <button>Send</button>
                    </div>
                </div>
            </Subscribe>
            
        </Wrap>
        </div>
    </FooterStyled>
  )
}

export default Footer