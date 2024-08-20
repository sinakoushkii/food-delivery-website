import React from 'react'
import { ListGroupItem } from 'reactstrap'
import productImg from '../../../assets/images/product_01.1.jpg'
import '../../../styles/cart-item.css'

const CartItem = () => {
    return (
        <ListGroupItem className='border-0 cart__item'>
            <div className='cart__item-info d-felx gap-2'>
                <img src={productImg} alt="productImg" />
                <div className='cart__product-info w-100 d-flex align-items-center 
                    justify-content-between gap-4'>
                    <div>
                        <h6 className='cart__product-title'>Burger</h6>
                        <p className='d-flex align-items-center gap-5
                        cart__product-price'>x2 <span>$24.00</span></p>
                        <div className='increase__decrease-btn d-flex align-items-center justify-content-center gap-3'>
                            <span className='increase__btn'><i className="ri-add-fill"></i></span>
                            <span>2</span>
                            <span className='decrease__btn'><i className="ri-subtract-line"></i></span>
                        </div>
                    </div>
                    <span className='delete__btn'><i className="ri-close-line"></i></span>
                </div>
            </div>
        </ListGroupItem>
    )
}

export default CartItem