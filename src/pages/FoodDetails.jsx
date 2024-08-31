import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import productData from '../assets/fake-data/product'
import productImg from '../assets/images/product_01.1.jpg'
import '../styles/food-details.css'
import { useParams } from 'react-router-dom'
import ProductCart from '../components/Ui/productCart/ProductCart'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'

export default function FoodDetails() {

  const { id } = useParams()
  
  const product = productData.find(product => product.id === id)
  const relatedProducts = productData.filter(item => item.category === product.category && item.id !== product.id)
  
  const [tab, setTab] = useState('desc')
  const [previewImg, setPreviewImg] = useState(product.image01)
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  const addItemToCart = () => {
    dispatch(cartActions.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image01: product.image01
    }))
  }

  const submitHandler=(e)=>{
    e.preventDefault()
  }
  return (
    <Helmet title='product-details'>
      <CommonSection title={product.title} />
      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className='product__images'>
                <div className='img__item' onClick={() => setPreviewImg(product.image01)}>
                  <img className='w-50' src={product.image01} alt="product-img" />
                </div>
                <div className='img__item' onClick={() => setPreviewImg(product.image02)}>
                  <img className='w-50' src={product.image02} alt="product-img" />
                </div>
                <div className='img__item' onClick={() => setPreviewImg(product.image03)}>
                  <img className='w-50' src={product.image03} alt="product-img" />
                </div>
              </div>
            </Col>

            <Col lg='4' md='4'>
              <div className='product-main-img'>
                <img className='w-100' src={previewImg} alt="product-img" />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='single__product-content'>
                <h2 className='product__title mb-3'>{product.title}</h2>
                <span className='product__price'>${product.price}</span>
                <p className='category mb-5'>Category: <span>{product.category}</span></p>
                <button onClick={() => addItemToCart()} className='addtoCart__btn'>Add to cart</button>
              </div>
            </Col>
            <Col lg='12'>
              <div className='tabs d-flex align-items-center gap-5 py-2'>
                <h6 className={`${tab === 'desc' ? 'tab__active' : ''}`} onClick={() => setTab('desc')}>Description</h6>
                <h6 className={`${tab === 'rev' ? 'tab__active' : ''}`} onClick={() => setTab('rev')}>Reviews</h6>
              </div>
              {
                tab === 'desc' ?
                  <div className='tab__content'>
                    <p>{product.desc}</p>
                  </div> :
                  <div className='tab__form mb-3'>
                    <div className='review'>
                      <p className='user__name mb-0'>Pitter smith</p>
                      <p className='user__email'>pitt003@gmail.com</p>
                      <p className='feedback__text'>Great product</p>
                    </div>

                    <div className='review'>
                      <p className='user__name mb-0'>Pitter smith</p>
                      <p className='user__email'>pitt003@gmail.com</p>
                      <p className='feedback__text'>Great product</p>
                    </div>

                    <div className='review'>
                      <p className='user__name mb-0'>Pitter smith</p>
                      <p className='user__email'>pitt003@gmail.com</p>
                      <p className='feedback__text'>Great product</p>
                    </div>

                    <form className='form' onSubmit={(e)=>submitHandler(e)}>
                      <div className='form__group'>
                        <input 
                        onChange={(e)=>setEnteredName(e.target.value)} 
                        type="text" placeholder='Name...' required />
                      </div>
                      <div className='form__group'>
                        <input 
                        onChange={(e)=>setEnteredEmail(e.target.value)} 
                        type="email" placeholder='Email address...' required />
                      </div>
                      <div className='form__group'>
                        <textarea 
                        onChange={(e)=>setReviewMsg(e.target.value)} 
                        rows={5} type='text' placeholder='Message...'  required/>
                      </div>

                      <button className='addtoCart__btn' type='submit'>Submit</button>
                    </form>
                  </div>
              }


            </Col>
            <Col lg='12' className='mb-5 mt-4'>
              <h2 className='related__product-title'>you might also like :</h2>
            </Col>
            {
              relatedProducts.map(item => (
                <Col className='mb-4' lg='3' md='4' sm='6' xs='6'>
                  <ProductCart key={item.id} item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
