import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './components/Nav'
const Payment = () => {
    const location = useLocation()
    const {checkIn,checkOut,rooms,totalAmount,name,email,phone,adult,kids} = location.state || ''
  return (
    <div>
      <Nav/>
          <div className='home-container'>
            <div className='home-card mt-3 home-align'>
              <div className='mt-4 ml-5'>
              <p className='payment-heading'>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{adult} and {kids}</p>
              </div>
              <div>
                <img className='image' src = 'https://static.vecteezy.com/system/resources/thumbnails/011/858/556/small_2x/green-check-mark-icon-with-circle-tick-box-check-list-circle-frame-checkbox-symbol-sign-png.png' alt = 'tick'/>
                <h3 className='payment-heading'>Order Complete</h3>
              </div>
            </div>
        </div>
        <div className='home-container'>
            <div className='book-card mt-3'>
            <div className='card-align ml-5 mt-3'>
                <div className='card-input-align mr-4'>
                <label>Check-in Date</label>
                <p>{checkIn}</p>
                </div>
                <div className='card-input-align mr-4'>
                <label>Check-out Date</label>
                <p>{checkOut}</p>
                </div>
                <div className='card-input-align mr-4'>
                <label>Rooms</label>
                <div className='card-align'>
                <p className='mr-3'>{rooms}</p>
                </div>
                </div>
                <button className='mr-3 mt-3 button' type='submit'>{totalAmount}</button>
                </div>
            </div>
        </div>
        <div className='payment-bottom mt-4'>
          <div className='ml-4 pt-3'>
          <h2>Brisphere</h2>
          <p>Spituk, Ladakh</p>
          <p>India, 194101</p>
          <p>+91 - 7764997033</p>
          <p>amit.jha6700@gmail.com</p>
          <button className='button mb-3'>Location</button>
          </div>
        </div>
    </div>
  )
}

export default Payment