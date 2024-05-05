import React from 'react'
import logo from '../../assets/images/res-logo.png'
import { Container } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {

  const nav__link = [
    {
      display: "Home",
      path: "/home"
    },
    {
      display: "Foods",
      path: "/foods"
    },
    {
      display: "Cart",
      path: "/cart"
    },
    {
      display: "Contact",
      path: "/contact"
    },
  ]
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>
          
          {/* ======= menu ======= */}
          
          <div className="navigation">
            <div className="menu">
              {
                nav__link.map((item, index) => (
                  <NavLink key={index} to={item.path}>{item.display}</NavLink>
                ))
              }
            </div>
          </div>

          {/* ======= nav right icons ======= */}

          <div className="nav__right">
            <span className="cart__icon">
            <i className="ri-shopping-cart-line"></i>
              <span className='cart__badge'>2</span>
            </span>
          </div>
          
        </div>
      </Container>
    </header>
  )
}
