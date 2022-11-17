import React from 'react'
import Footer from '../components/HomeComponents/Footer/Footer'
import Header from '../components/HomeComponents/Header'

const unsuccessfulPayment = () => {
  return (
    <>
      <Header modalControl={undefined} />
      <div>
        <h1>Payment Unsuccessful</h1>
      </div>
      <Footer />
    </>
  )
}

export default unsuccessfulPayment