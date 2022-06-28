import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Title from '../../Components/Title/Title'
import { Action, Banner, Faq, Features, Form, Frontline, GetStarted, LayerWrap, Policy, Signup, Value } from './Layer.styled'
import Button from './../../Components/Button/Button'
// import Footer from './../../Components/Footer/Footer'


const Layer = () => {
  const features = [
    {
      title: 'Import',
      image: '/images/goldpile.png',
      text: 'imports'
    },
    {
      title: 'track shipment',
      image: '/images/wollysearch.png',
      text: 'track shipment'
    },
    {
      title: 'safe keeping',
      image: '/images/wollysafe.png',
      text: 'safe keeping'
    }

  ]

  const faq = [
    {
      question: '24/7 Chat Support',
      desc:'Get 24/7 chat support with our friendly customer service agents at your service.',
      action:'Chat now',
      image: '/icons/chat-support.png'
    },
    {
      question: 'FAQs',
      desc:'View FAQs for detailed instructions on specific features.',
      action:'Lern more',
      image: '/icons/faq.png'
    },
    {
      question: 'Blog',
      desc:' Stay up to date with the latest stories and commentary.',
      action:'Lern more',
      image: '/icons/blog.png'
    },
  ]

  return (
    <LayerWrap>
      <Frontline>

      
        {/* <div className="layer">
            <Title text='HOW TO GET STARTED' />
        </div> */}
        <Signup>
            <div className="signup-wrap">
                <div className='heading'>
                    <h3>Create account</h3>
                    <p>We acknowledge an increasing complexity in our operating environments, with heightened knowledge an increasing</p>
                </div>
            </div>
        </Signup>

        <Form>
            <div className='form-wrap'>
                <form>
                    <h3>Sign up</h3>
                    <div className='input-box'>
                        <input type='text' placeholder='Your name' />
                    </div>
                    <div className='input-box'>
                        <input type='email' placeholder='Email' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' />
                    </div>
                    <p>Agree with terms and conditions of User</p>
                    <div>
                      <Button text='sign up'/>
                    </div>
                </form>
            </div>
        </Form>
        </Frontline>
        <svg role="presentation" aria-hidden="true" fill="none" height="57" viewBox="0 0 69 17" width="169">
  <path d="M69 17v-2.776L66.302 17H69zm-6.895 0L69 9.906V7.122L59.4 17h2.705zm-6.903 0L69 2.803V.02L52.497 17h2.705zM48.3 17L64.822 0h-2.705L45.595 17H48.3zm-6.903 0L57.919 0h-2.706L38.691 17h2.706zm-6.902 0L51.017 0H48.31L31.79 17h2.706zm-6.903 0L44.114 0h-2.709L24.887 17h2.705zm-6.903 0L37.207 0h-2.705L17.984 17h2.705zm-6.903 0L30.304 0H27.6L11.081 17h2.705zm-6.903 0L23.401 0h-2.705L4.178 17h2.705zm6.911-17L0 14.197v2.783L16.5 0h-2.706zM6.891 0L.001 7.095v2.783L9.596 0H6.89zM.001 0v2.776L2.694 0H.001z" fill="#FBBC04"></path>
</svg>
        <GetStarted>
            <div className='wrap'>
              <div className="layer">
                <Title text='HOW TO GET STARTED' />
              </div>
              <section className='section-wrap'>
                  <div className='section-1'>
                      <div className='section-1-img'>
                          <Image src='/images/goldbar.png' alt='' width='500' height='500' layout='intrinsic' objectFit="cover"/>
                        </div>
                  </div>
                  <div className='section-2'>
                    <h2>Grow Your <span>Gold</span> In The Right Way</h2>
                    <p>invest your gold with us and gain more profits consistently everyday! We acknowledge an increasing complexity in our operating environments, with heightened expectations for business to contribute</p>
                    
                    <div className='btn'>
                      <Button text='Get Started'/>
                    </div>
                  </div>
              </section>
            </div>
        </GetStarted>
        <Policy>
            <div className='wrap'>
              <div className='section-1'>
                <h3>Your trusted Gold Security Company</h3>
                <p className='head-p'>Here at Kinrabb Gold, we are committed to user protection with strict protocols and industry-leading technical measures.</p>
                <div className='policy-container'>
                  <div className='policy-item'>
                    <div className='policy-item-img'>
                      <Image src='/icons/badge.png' alt='' width='150' height='150' layout='intrinsic' objectFit="cover"/>
                    </div>
                    <div className='policy-item-text'>
                      <h4>Secure Asset Fund for Users (SAFU)</h4>
                      <p>Binance stores 10% of all trading fees in a secure asset fund to protect a share of user funds.</p>
                    </div>

                  </div>

                  <div className='policy-item'>
                    <div className='policy-item-img'>
                      <Image src='/icons/access.png' alt='' width='150' height='150' layout='intrinsic' objectFit="cover"/>
                    </div>
                    <div className='policy-item-text'>
                      <h4>Personalised Access Control</h4>
                      <p>Advanced access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.</p>
                    </div>

                  </div>
                  <div className='policy-item'>
                    <div className='policy-item-img'>
                      <Image src='/icons/lock.png' alt='' width='150' height='150' layout='intrinsic' objectFit="cover"/>
                    </div>
                    <div className='policy-item-text'>
                      <h4>Advanced Data Encryption</h4>
                      <p>Your transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information.</p>
                    </div>

                  </div>


                </div>
              </div>

              <div className='side-img'>
                <div>
                <Image src='/images/lock.png' alt='' width='500' height='500' layout='intrinsic' objectFit="cover"/> 
                </div>
              </div>
            </div>
        </Policy>

        <Value>
            <div className='wrap'>
              <div className='section-1'>
                <h3>Kinrabb Gold Security Company</h3>
              </div>
              
              <div className='section-2'>
                <div className='section-column section-2-column-1'>
                  <div className='box item-1'>
                      <div className='box-img'>
                        <Image src='/icons/security_lock.png' alt='' width='50' height='50' layout='intrinsic' objectFit="cover"/>
                      </div>
                      <h3>values</h3>
                      <p>We serve our customers with fairness and transparency. We settle all contracts by the book and speak plainly and truthfully.</p>
                  </div>
                  <div className='box item-1'>
                      <div className='box-img'>
                        <Image src='/icons/handshake.png' alt='' width='50' height='50' layout='intrinsic' objectFit="cover"/>
                      </div>
                      <h3>Teamwork</h3>
                      <p>We value team players that collaborate freely across departments with humility and ambition.</p>
                  </div>
              </div>

              <div className=' section-column section-2-column-2'>
                  <div className='box item-1'>
                      <div className='box-img'>
                        <Image src='/icons/protect.png' alt='' width='50' height='50' layout='intrinsic' objectFit="cover"/>
                      </div>
                      <h3>Competence</h3>
                      <p>We value colleagues with an aptitude to learn and grow and the ability to use good judgement.</p>
                  </div>
                  <div className='box item-1'>
                      <div className='box-img'>
                        <Image src='/icons/online_support.png' alt='' width='50' height='50' layout='intrinsic' objectFit="cover"/>
                      </div>
                      <h3>Customer focus</h3>
                      <p>We put the customer first and strive to build products that deliver the best customer experience.</p>
                  </div>
              </div>
              
            </div>
            </div>
        </Value>


        <Features>
            <div className='wrap'>
              <h3>We have A Lot Of Features Just For You</h3>
              
              <div className='feature-container'>
                {
                  features.map((feature, index) => {
                    return (
                      // <div className='feature-item' key={index}>
                      //   <div className='feature-item-img'>
                      //     <Image src={feature.image} alt='' width='150' height='150' layout='intrinsic' objectFit="cover"/>
                      //   </div>
                      //   <div className='feature-item-text'>
                      //     <h4>{feature.title}</h4>
                      //     <p>{feature.text}</p>
                      //   </div>
                      // </div>

                      <div className='feature-item' key={index}>
                  <div className='feature-item-img'>
                  <Image src={feature.image} alt='' width='300' height='300' layout='intrinsic' objectFit="contain"/>
                  </div>
                  <h4>{feature.title}</h4>
                
                  <Link href='#' passHref>
                    <button>More on {feature.text} <span>&gt;</span></button>
                  </Link>

              </div>
                    )
                  }
                )}

                
            </div>
            </div>
        </Features>

        <Action>
            <div className='wrap'>
              <div className='section-1'>
                <h3>start saving gold with us</h3>
                <div className='btn'>
                <Button text='Get Started'/>
                </div>
              </div>
            </div>
            
        </Action>
        
                  <svg role="presentation" aria-hidden="true" width="320" height="40" viewBox="0 0 320 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0V6.8L6.8 0H0Z" fill="#5F6368"></path>
<path d="M20.6 0L0 20.6V27.6L27.6 0H20.6Z" fill="#5F6368"></path>
<path d="M41.5 0L1.5 40H8.4L48.4 0H41.5Z" fill="#5F6368"></path>
<path d="M62.3008 0L22.3008 40H29.2008L69.2008 0H62.3008Z" fill="#5F6368"></path>
<path d="M83.0996 0L43.0996 40H49.9996L89.9996 0H83.0996Z" fill="#5F6368"></path>
<path d="M103.9 0L63.9004 40H70.9004L110.9 0H103.9Z" fill="#5F6368"></path>
<path d="M124.699 0L84.6992 40H91.6992L131.699 0H124.699Z" fill="#5F6368"></path>
<path d="M145.6 0L105.6 40H112.5L152.5 0H145.6Z" fill="#5F6368"></path>
<path d="M166.4 0L126.4 40H133.3L173.3 0H166.4Z" fill="#5F6368"></path>
<path d="M187.199 0L147.199 40H154.099L194.099 0H187.199Z" fill="#5F6368"></path>
<path d="M208 0L168 40H175L215 0H208Z" fill="#5F6368"></path>
<path d="M228.801 0L188.801 40H195.801L235.801 0H228.801Z" fill="#5F6368"></path>
<path d="M249.699 0L209.699 40H216.599L256.599 0H249.699Z" fill="#5F6368"></path>
<path d="M270.5 0L230.5 40H237.4L277.4 0H270.5Z" fill="#5F6368"></path>
<path d="M291.301 0L251.301 40H258.301L298.301 0H291.301Z" fill="#5F6368"></path>
<path d="M312.1 0L272.1 40H279.1L319.1 0H312.1Z" fill="#5F6368"></path>
<path d="M293 40H299.9L320 19.9V13L293 40Z" fill="#5F6368"></path>
<path d="M320.001 39.9998V33.7998L313.801 39.9998H320.001Z" fill="#5F6368"></path>
</svg>
        <Banner>
          <div className='wrap'>

          </div>
        </Banner>

        <Faq>
            <div className='wrap'>
              <h3>Have questions?</h3>
              <div className='faq-tab'>
                {
                  faq.map((item, index) => {
                    return (
                      <div className='faq-tab-item' key={index}>
                        <div className='faq-tab-item-img'>
                          <Image src={item.image} alt='' width='60' height='60' layout='intrinsic' objectFit="contain"/>
                        </div>
                        <div className='faq-tab-item-info'>
                          <h4>{item.question}</h4>
                          <p>{item.desc}</p>
                          <Link className='link' href='/faq' passHref>
                            <a >{item.action}</a>
                          </Link>
                        </div>
                      </div>
                    )
                  })
                }
                
            </div>
            </div>
        </Faq>
              
            {/* <Footer/> */}
       

    </LayerWrap>
  )
}

export default Layer