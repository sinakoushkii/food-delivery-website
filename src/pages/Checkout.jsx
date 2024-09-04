import React, { useEffect, useReducer } from 'react'
import Helemt from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import { initialState, ACTION, reducer } from '../reducers/checkoutReducer'
import '../styles/checkout.css'


export default function Checkout() {

  const shippingInfo = []
  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  const shippingCost = 30
  const totalAmount = cartTotalAmount + Number(shippingCost)

  const [state, dispatch] = useReducer(reducer, initialState);

  function submitFormHandler(event) {

    event.preventDefault();
    dispatch({ type: ACTION.BTN_ACTIVE })
    const userShippingAddress = {
      name: state.name,
      email: state.email,
      number: state.number,
      country: state.country,
      city: state.city,
      postalCode: state.postalCode,
    }
    shippingInfo.push(userShippingAddress)
    
    setTimeout(() => {
      dispatch({ type: ACTION.REMOVE_STATE })
    }, 2000)

  }

  return (
    <Helemt title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <h6 className='mt-4'>Shipping Address</h6>
              <form className='form__checkout' onSubmit={(event) => submitFormHandler(event)}>
                <div className='form__group'>
                  <input type="text" value={state.name} placeholder='Your Name' required onChange={(event) => dispatch({ type: ACTION.SET_NAME, payload: event.target.value })} />
                </div>
                <div className='form__group'>
                  <input type="email" value={state.email} placeholder='Your Email' onChange={(event) => dispatch({ type: ACTION.SET_EMAIL, payload: event.target.value })} />
                </div>
                <div className='form__group'>
                  <input type="number" value={state.number} placeholder='Your Phone Number' required onChange={(event) => dispatch({ type: ACTION.SET_NUMBER, payload: event.target.value })} />
                </div>
                <div className='form__group'>
                  <input type="text" value={state.country} placeholder='Country' required onChange={(event) => dispatch({ type: ACTION.SET_COUNTRY, payload: event.target.value })} />
                </div>
                <div className='form__group'>
                  <input type="text" value={state.city} placeholder='City' required onChange={(event) => dispatch({ type: ACTION.SET_CITY, payload: event.target.value })} />
                </div>
                <div className='form__group'>
                  <input type="number" value={state.postalCode} placeholder='Postal Code' required onChange={(event) => dispatch({ type: ACTION.SET_POSTALCODE, payload: event.target.value })} />
                </div>
                <button disabled={state.btnActive} className={`addtoCart__btn ${state.btnActive ? 'btn__disabled' : ''}`}>Payment</button>
              </form>
            </Col>
            <Col lg='4' md='6'>
              <div className='checkout__bill'>
                <h6 className='d-flex align-items-center justify-content-between mb-3'>
                  Subtotal: <span>{cartTotalAmount}</span>
                </h6>
                <h6 className='d-flex align-items-center justify-content-between mb-3'>
                  Shipping: <span>{shippingCost}</span>
                </h6>
                <div className='checkout__total'>
                  <h5 className='d-flex align-items-center justify-content-between'>
                    Total: <span>{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helemt>
  )
}
