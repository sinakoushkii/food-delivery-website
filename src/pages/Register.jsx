import React, { useRef } from 'react'
import Helemt from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Register() {
  const signUpNameRef = useRef()
  const signUpEmailRef = useRef()
  const signUpPasswordRef = useRef()
  const signUpRepeatPasswordRef = useRef()

  const sumbitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <Helemt title='Login'>
      <CommonSection title='Login' />
      <section>
        <Container>
          <Row>
            <Col className='m-auto text-center' lg='6' md='6' sm='12'>
              <form className='form mb-5' >
                <div className='form__group'>
                  <input type="text" placeholder='Full Name...' ref={signUpNameRef} required />
                </div>
                <div className='form__group'>
                  <input type="email" placeholder='Email...' ref={signUpEmailRef} required />
                </div>
                <div className='form__group'>
                  <input type="password" placeholder='Password...' ref={signUpPasswordRef} required />
                </div>
                <div className='form__group'>
                  <input type="password" placeholder='Repeat Password...' ref={signUpRepeatPasswordRef} required />
                </div>
                <button className='addtoCart__btn'>Sign Up</button>
              </form>
              <p>Already have an account ?<Link to='/login'> Log in</Link></p>
            </Col>
          </Row>
        </Container>
      </section>
    </Helemt>
  )
}
