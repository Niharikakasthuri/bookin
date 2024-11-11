import React, {useState } from 'react'
import Nav from './components/Nav'
import {useLocation,useNavigate } from 'react-router-dom'
const Books = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {checkInDate,checkOutDate,numRooms} = location.state || ''
    const [checkIn,setCheckin] = useState(checkInDate || '')
    const [checkOut,setCheckout] = useState(checkOutDate || '')
    const [rooms,setRooms] = useState(numRooms || 1)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone]= useState('')
    const [adult,setAdult] = useState('')
    const [kids,setKids] = useState('')

    const roomPrice = 200 

    const calculatePrice = (checkIn,checkOut) => {
        const checkInDate = new Date(checkIn)
        const checkOutDate = new Date(checkOut)
        const time = checkOutDate - checkInDate 
        const days = time / (1000 * 3600 *24)
        return days >= 0 ? days : 0
    }

    const incrementRoom = () => {
        setRooms(rooms + 1)
    }
    const decrementRooms = () => {
        if (rooms > 1){
            setRooms(rooms - 1)
        }
    }
    
    const handleTotal = () => {
        const days = calculatePrice(checkIn,checkOut)
        if(days > 0){
            const totalAmount = days * rooms * roomPrice
            navigate('/payment',{
                state:{checkIn,checkOut,rooms,totalAmount,name,email,phone,adult,kids}
            })
        }else{
            alert('Please check there is an error')
        }
    }

  return (
    <div>
        <Nav/>
            <div>
            <div className='home-container'>
            <div className='book-page-card mt-3 book-page-align'>
                <div className='book-align mt-5 ml-5'>
                <input className='book-input mr-5 mb-3' placeholder='Enter Name' type = 'text' value = {name} onChange={(e) => setName(e.target.value)}/>
                <input className = 'book-input' placeholder='Enter Email' type = 'text' value = {email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='book-align mt-5 ml-5'>
                <input className='book-input mr-5 mb-3' placeholder='Enter Phone Number' type = 'text' value = {phone} onChange={(e) => setPhone(e.target.value)}/>
                <input className='book-input mr-5 mb-3' placeholder='Enter Number of Adults' type = 'text' value = {adult} onChange={(e) => setAdult(e.target.value)}/>
                <input className='book-input mr-5' placeholder='Enter Number of childern' type = 'text' value = {kids} onChange={(e) => setKids(e.target.value)}/>
                </div>
            </div>
        </div>
                <div className='home-container'>
            <div className='book-card mt-3'>
            <div className='card-align ml-5 mt-3'>
                <div className='card-input-align mr-4'>
                <label>Check-in Date</label>
                <input type = 'date' value={checkIn} onChange={(e) => setCheckin(e.target.value)}/>
                </div>
                <div className='card-input-align mr-4'>
                <label>Check-out Date</label>
                <input type = 'date' value={checkOut} onChange={(e) => setCheckout(e.target.value)}/>
                </div>
                <div className='card-input-align mr-4'>
                <label>Rooms</label>
                <div className='card-align'>
                <button className='mr-3 decrement-button' onClick={decrementRooms}>-</button>
                <p className='mr-3'>{rooms}</p>
                <button className='mr-3 increment-button' onClick={incrementRoom}>+</button>
                </div>
                </div>
                <button className='mr-3 mt-3 button' type='submit' onClick={handleTotal}>Payment</button>
                </div>
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

export default Books