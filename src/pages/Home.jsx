import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImage from '../assets/images/hero.png'
import '../styles/hero-section.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Helmet title='home'>
      <Container>
        <Row>
          <Col lg='6' md='6' >
            <div className='hero__content'>
              <h5 className='mb-3 mt-4'>Easy way to make an order</h5>
              <h1 className='mb-4 hero__title'>
                <span>Hungry? </span>just wait <br /> food <span>at your door</span>
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia beatae tempora debitis cumque aliquam explicabo sit voluptatum harum nam incidunt?</p>

              <div className='hero__btns d-flex align-items-center gap-5'>
                <button className='order__btn d-flex align-items-center justify-content-between gap-1'>
                  Order now
                  <i class="ri-arrow-right-s-line"></i>
                </button>

                <button className='all__foods__btn'>
                  <Link to='/foods'>
                    see all foods
                  </Link>
                </button>
              </div>

              <div className='hero-service d-flex align-items-center gap-5 mt-5'>
                <p className='d-flex align-items-center gap-2'>
                  <span className='shipping-icon'>
                  <i class="ri-roadster-fill"></i>
                  </span>
                    No shipping charge
                </p>
                <p className='d-flex align-items-center gap-2'>
                  <span className='shipping-icon'>
                  <i class="ri-shield-check-line"></i>
                  </span>
                    100% secure checkout 
                </p>
              </div>
            </div>
          </Col>
          <Col lg='6' md='6' >
            <div className='hero__img'>
              <img className='w-100' src={heroImage} alt="hero-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  )
}
