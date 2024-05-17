import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImage from '../assets/images/hero.png'
import { Link } from 'react-router-dom'
import Category from '../components/Ui/category/Category'
import products from '../assets/fake-data/product'
import ProductCart from '../components/Ui/productCart/ProductCart'
import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'
import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'
import '../styles/hero-section.css'
import '../styles/home.css'

export default function Home() {

  const featureData = [
    {
      title: 'Quick Delivery',
      imgUrl: featureImg01,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      Minus: 'adipisicing'
    },
    {
      title: 'Super Dine In',
      imgUrl: featureImg02,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      Minus: 'adipisicing'
    },
    {
      title: 'Esay Pick Up',
      imgUrl: featureImg03,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      Minus: 'adipisicing'
    },
  ]


  const [category, setCategory] = useState('all')
  const [allProducts, setAllProducts] = useState(products)

  useEffect(() => {
    let content;

    switch (category) {
      case 'all':
        setAllProducts(products)
        break;
      case 'burger':
        const burger = products.filter(product => product.category === 'Burger')
        setAllProducts(burger)
        break;
      case 'pizza':
        const pizza = products.filter(product => product.category === 'Pizza')
        setAllProducts(pizza)
        break;
      case 'bread':
        const bread = products.filter(product => product.category === 'Bread')
        setAllProducts(bread)
        break;
      default:
        setAllProducts(products)
    }
  }, [category])

  return (
    <Helmet title='home'>
      <section>
        <Container>
          <Row className='align-items-center'>
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
                    <i className="ri-arrow-right-s-line"></i>
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
                      <i className="ri-roadster-fill"></i>
                    </span>
                    No shipping charge
                  </p>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping-icon'>
                      <i className="ri-shield-check-line"></i>
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
      </section>

      <section className='pt-0'>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col className='text-center' lg='12'>
              <h5 className='feature__subtitle mb-4'>What we serve</h5>
              <h2 className='feature__title'>Just sit back at home</h2>
              <h2 className='feature__title'>We will <span>take care</span></h2>
              <p className='feature__text mb-1 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, neque.</p>
              <p className='feature__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, recusandae!</p>
            </Col>
            {
              featureData.map((item, index) => (
                <Col key={index} className='mt-5' lg='4' md='4'>
                  <div className='feature__item text-center px-5 py-3'>
                    <img className='w-25 mb-3' src={item.imgUrl} alt="feature-image" />
                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col className='text-center' lg='12'>
              <h2>Popular Foods</h2>
            </Col>
            <Col lg='12'>
              <div className='food__category d-flex align-items-center justify-content-center gap-4'>
                <button className='foodBtnActive' onClick={()=>setCategory('all')}>All</button>
                <button 
                onClick={()=>setCategory('burger')}
                className='d-flex align-items-center gap-2'>
                  Burger
                  <img src={foodCategoryImg01} alt="foodCategory" />
                </button>
                <button 
                onClick={()=>setCategory('pizza')}
                className='d-flex align-items-center gap-2'>
                  Pizza
                  <img src={foodCategoryImg02} alt="foodCategory" />
                </button>
                <button 
                onClick={()=>setCategory('bread')}
                className='d-flex align-items-center gap-2'>
                  Bread
                  <img src={foodCategoryImg03} alt="foodCategory" />
                </button>
              </div>
            </Col>
            {
              allProducts.map(item => (
                <Col className='mt-5' lg='3' md='4' key={item.id}>
                  <ProductCart item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
