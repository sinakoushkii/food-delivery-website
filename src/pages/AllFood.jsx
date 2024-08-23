import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/common-section/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import products from '../assets/fake-data/product'
import ProductCart from '../components/Ui/productCart/ProductCart'
import '../styles/all-foods.css'

export default function AllFood() {
  const [searchTerm, SetSearchTerm] = useState('')
  const [productData, SetProductData] = useState(products)

  return (
    <Helmet title='All foods'>
      <CommonSection title='All foods' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className='search-widget w-50'>
                <input
                  value={searchTerm}
                  onChange={(e) => SetSearchTerm(e.target.value)}
                  type="text"
                  placeholder="I'm looking for..." />
                <span style={{ cursor: "pointer" }}><i className="ri-search-line"></i></span>
              </div>
            </Col>
            <Col className='mb-5' lg='6' md='6' sm='6'>
              <div className='sorting-widget text-end'>
                <select className='w-50'>
                  <option>Default</option>
                  <option value="ascending">A-Z</option>
                  <option value="descending">Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {
              productData.filter(product=>{
                if(searchTerm===''){
                  return product
                }
                if(product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                  return product
                }
              })
              .map(item => (
                <Col className='mb-4' key={item.id} lg='3' md='4' sm='6' xs='6'>
                  <ProductCart item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
