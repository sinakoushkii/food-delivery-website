import React from 'react'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import '../../../styles/shopping-cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartUiAction } from '../../../store/shopping-cart/cartUiSlice'

const Carts = () => {
    const dispatch = useDispatch()
    const cartToggle = () => { dispatch(cartUiAction.toggle()) }
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice=useSelector(state=>state.cart.totalAmount)

    return (
        <div className='cart__container'>
            <ListGroup className='cart'>
                <div style={{ cursor: 'pointer' }} onClick={() => cartToggle()} className='cart__close'>
                    <span><i className="ri-close-line"></i></span>
                </div>
                <div className='cart__item-list'>
                    {cartItems.length === 0 ?
                        <h6 className='text-center mt-3'>No item added to the cart !</h6> :
                        cartItems.map((item, index) => (
                            <CartItem key={index} {...item} />
                        ))}

                </div>
                <div className='cart__bottom d-flex align-items-center justify-content-between'>
                    <h6>Total: <span>${totalPrice}</span></h6>
                    <button>
                        <Link to='/checkout'>Checkout</Link>
                    </button>
                </div>
            </ListGroup>
        </div>
    )
}

export default Carts