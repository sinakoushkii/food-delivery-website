import React from 'react'
import productImg from '../../../assets/images/product_01.1.jpg'
import { Link } from 'react-router-dom'

export default function ProductCart({item}) {
    const {id, title, image01, price }=item

    return (
        <div className='product__item'>
            <div className='product__img'>
                <img className='w-50' src={image01} alt="product-image" />
            </div>
            <div className='product__content'>
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div>
                    <span className='product__price'>${price}</span>
                    <button className='addtoCart__btn'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
