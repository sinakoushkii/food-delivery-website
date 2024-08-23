import React from 'react'
import { ListGroupItem } from 'reactstrap'
import productImg from '../../../assets/images/product_01.1.jpg'
import '../../../styles/cart-item.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'

const CartItem = ({ id, title, price, image01, quantity, totalprice }) => {
    const dispatch = useDispatch()

    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01,
            quantity
        }))
    }
    const decrementItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    return (
        <ListGroupItem className='border-0 cart__item'>
            <div className='cart__item-info d-felx gap-2'>
                <img src={image01} alt="productImg" />
                <div className='cart__product-info w-100 d-flex align-items-center 
                    justify-content-between gap-4'>
                    <div>
                        <h6 className='cart__product-title'>{title}</h6>
                        <p className='d-flex align-items-center gap-5
                        cart__product-price'>x{quantity} <span>${totalprice}</span></p>
                        <div className='increase__decrease-btn d-flex align-items-center justify-content-center gap-3'>
                            <span onClick={() => incrementItem()} className='increase__btn'><i className="ri-add-fill"></i></span>
                            <span>{quantity}</span>
                            <span onClick={() => decrementItem()} className='decrease__btn'><i className="ri-subtract-line"></i></span>
                        </div>
                    </div>
                    <span onClick={()=>dispatch(cartActions.deleteItem(id))} className='delete__btn'><i className="ri-close-line"></i></span>
                </div>
            </div>
        </ListGroupItem>
    )
}

export default CartItem