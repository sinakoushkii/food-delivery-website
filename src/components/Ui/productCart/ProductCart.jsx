import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/productCard.css'

export default function ProductCart({ item }) {
    const { id, title, image01, price } = item

    return (
        <div className='product__item'>
            <div className='product__img'>
                <img className='w-50' src={image01} alt="product-image" />
            </div>
            <div className='product__content'>
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className='product__price'>${price}</span>
                    <button className='addtoCart__btn'>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
