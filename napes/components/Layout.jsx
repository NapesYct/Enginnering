import React from 'react'
import Footer from './HomeComponents/Footer/Footer'
import Header from './HomeComponents/Header'

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default Layout