import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import productImg from '../assets/images/product_01.1.jpg'
import '../styles/food-details.css'

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
                <h2 className='product__title mb-3'>Pizza with mashroom</h2>
                <span className='product__price'>$200</span>
                <p className='category mb-5'>Category: <span>Burger</span></p>
                <button className='addtoCart__btn'>Add to cart</button>
              </div>
            </Col>
            <Col lg='12'>
              <div className='tabs d-flex align-items-center gap-5 py-2'>
                <h6 className='tab__active'>Description</h6>
                <h6>Reviews</h6>
              </div>
              <div className='tab__content'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius eum perspiciatis omnis odit quia, repellendus ipsam non, odio aperiam possimus ad fuga hic eos accusantium nobis, et modi? Voluptates! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, numquam.</p>
              </div>

              <div className='tab__form'>
                <form className='form'>
                  <div className='form__group'>
                    <input type="text" placeholder='Enter your name' />
                  </div>
                  <div className='form__group'>
                    <input type="text" placeholder='Enter your name' />
                  </div>
                  <div className='form__group'>
                    <textarea rows={5} type='text'  placeholder='Enter your name'/>
                  </div>

                  <button className='addtoCart__btn' type='submit'>Submit</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
