import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import productImg from '../assets/images/product_01.1.jpg'

export default function FoodDetails() {
  return (
    <Helmet title='product-details'>
      <CommonSection title='product 01' />
      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className='product__images'>
                <div className='img__item'>
                  <img className='w-50' src={productImg} alt="product-img" />
                </div>
                <div className='img__item'>
                  <img className='w-50' src={productImg} alt="product-img" />
                </div>
                <div className='img__item'>
                  <img className='w-50' src={productImg} alt="product-img" />
                </div>
              </div>
            </Col>

            <Col lg='4' md='4'>
              <div className='product-main-img'>
                <img className='w-100' src={productImg} alt="product-img" />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='single__product-content'>
                <h2 className='product__title'>Pizza with mashroom</h2>
                <span className='product__price'>$200</span>
                <p>Category: <span>Burger</span></p>
                <button className='addtoCart__btn'>Add to cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
