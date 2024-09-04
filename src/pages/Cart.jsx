import React from 'react'
import Helemt from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import '../styles/cart-page.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'
import { Link } from 'react-router-dom'


const Tr = props => {
  const { id, image01, title, price, quantity } = props.item
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }
  return (
    <tr>
      <td className='cart__img-box'>
        <img src={image01} alt="product-image" />
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <td>{quantity}x</td>
      <td className='cart__item-del'>
        <i onClick={() => deleteItem()} className="ri-delete-bin-line"></i>
      </td>
    </tr>
  )
}

export default function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <Helemt title='cart'>
      <CommonSection title='your cart' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {cartItems.length === 0 ?
                <h5 className='text-center'>Cart is empty</h5> :
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product   Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => <Tr item={item} key={item.id} />)}
                  </tbody>
                </table>
              }
              <div className='mt-5'>
                <h6>Total: <span className='cart__total'>${totalAmount}</span></h6>
                <p>Taxes and shipping will be calculated at checkout</p>
                <div>
                  <button className='addtoCart__btn me-4'>
                    <Link to='/foods'>Continue shopping</Link>
                  </button>
                  {cartItems.length === 0 ?
                    <button disabled={true} className='addtoCart__btn btn__disabled'>
                      Checkout
                    </button> :

                    <button className='addtoCart__btn'>
                      <Link to='/checkout'>Checkout</Link>
                    </button>
                  }
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helemt>
  )

}
