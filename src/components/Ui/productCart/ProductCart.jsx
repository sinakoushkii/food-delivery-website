import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/productCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'


export default function ProductCart({ item }) {
    const { id, title, image01, price } = item
    const dispatch=useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const addToCart=()=>{
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }

    return (
        <div className='product__item'>
            <div className='product__img'>
                <img className='w-50' src={image01} alt="product-image" />
            </div>
            <div className='product__content'>
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div className='product__btn-wrapper'>
                    <span className='product__price'>${price}</span>
                    <button className='addtoCart__btn' onClick={addToCart}>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
