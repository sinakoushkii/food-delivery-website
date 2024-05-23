import React from 'react'
import { Container, Row,Col } from 'reactstrap'
import categoryImg01 from '../../../assets/images/category-01.png'
import categoryImg02 from '../../../assets/images/category-02.png'
import categoryImg03 from '../../../assets/images/category-03.png'
import categoryImg04 from '../../../assets/images/category-04.png'
import '../../../styles/category.css'


const categoryData = [
    {
        display: 'Fastfood',
        imageUrl: categoryImg01
    },
    {
        display: 'Pizza',
        imageUrl: categoryImg02
    },
    {
        display: 'Asian Food',
        imageUrl: categoryImg03
    },
    {
        display: 'Raw Meat',
        imageUrl: categoryImg04
    },
]

export default function Category() {
    return (
        <Container>
            <Row>
                {
                    categoryData.map((item, index) => (
                        <Col className='category__wrapper' key={index} lg='3' md='4' sm='6' xs='6'>
                            <div className='category-item d-flex align-items-center gap-2'>
                                <div className='category-img'>
                                    <img src={item.imageUrl} alt="categoryImage" />
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
