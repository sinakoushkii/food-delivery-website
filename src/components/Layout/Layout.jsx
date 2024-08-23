import React from 'react'
import Routes from '../../routes/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Carts from '../Ui/cart/Carts'
import { useSelector } from 'react-redux'

export default function Layout() {
  const showCart=useSelector(state=>state.cartUi.cartISVisible)
  return (
    <div>
        <Header />
        {showCart && <Carts />}
        <div>
            <Routes />
        </div>
        <Footer />
    </div>
  )
}
