import React from 'react'
import Routes from '../../routes/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div>
        <Header />
        <div>
            <Routes />
        </div>
        <Footer />
    </div>
  )
}
