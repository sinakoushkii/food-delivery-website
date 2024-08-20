import React from 'react'
import Routes from '../../routes/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Carts from '../Ui/cart/Carts'

export default function Layout() {
  return (
    <div>
        <Header />
        <Carts />
        <div>
            <Routes />
        </div>
        <Footer />
    </div>
  )
}
