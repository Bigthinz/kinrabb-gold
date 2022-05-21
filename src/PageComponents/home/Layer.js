import React from 'react'
import Image from 'next/image'
import Title from '../../Components/Title/Title'
import { Form, GetStarted, LayerWrap, Signup } from './Layer.styled'
import Button from './../../Components/Button/Button'


const Layer = () => {
  return (
    <LayerWrap>
        <div className="layer">
            <Title text='HOW TO GET STARTED' />
        </div>
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

    </LayerWrap>
  )
}

export default Layer