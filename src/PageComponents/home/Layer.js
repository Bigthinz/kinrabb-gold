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