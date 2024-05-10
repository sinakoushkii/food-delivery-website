import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import '../../styles/footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>Lorem ipsum dolor sit quo modi cumque animi distinctio suscipit similique esse!</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className='footer-title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className='footer-title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <p>Location: Freshteh - Tehran - Iran</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone: 033-555-475-589</span>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className='footer-title'>Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className='newsletter'>
              <input type="email" placeholder='Enter your email' />
              <span><i class="ri-send-plane-fill"></i></span>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p>Copyright - 2024 , website made by sina derikvand . All rights reserved</p>
          </Col>
          <Col lg='6' md='6'>
            <div className='social__links d-flex align-items-center justify-content-end gap-4'>
              <p className='m-0'>Follow:</p>
              <span>
                <Link to='http://www.facebook.com'>
                  <i class="ri-facebook-circle-fill"></i>
                </Link>
              </span>
              <span>
                <Link to='http://www.github.com'>
                  <i class="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to='http://www.youtube.com'>
                <i class="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to='http://www.linkedin.com'>
                <i class="ri-linkedin-box-fill"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
