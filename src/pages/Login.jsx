import React, { useRef } from 'react'
import Helemt from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'


export default function Login() {
  const loginEmailRef = useRef()
  const loginPasswordRef = useRef()

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
                  <input type="email" placeholder='Email...' ref={loginEmailRef} required />
                </div>
                <div className='form__group'>
                  <input type="password" placeholder='Password...' ref={loginPasswordRef} required />
                </div>
                <button className='addtoCart__btn'>Login</button>
              </form>
              <p>Don't have an account ?<Link to='/register'> Create an account</Link></p>
            </Col>
          </Row>
        </Container>
      </section>
    </Helemt>
  )
}
