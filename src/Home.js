import React,{useState} from 'react'
import Nav from './components/Nav'
import { useNavigate } from 'react-router-dom'
import { FaWifi } from "react-icons/fa6";
import { MdOutlineNoMeals } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { IoBicycle } from "react-icons/io5";
import { CiMap } from "react-icons/ci";
import { IoFlag } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";


const Home = () => {
    const [checkInDate,setCheckinDate] = useState('')
    const [checkOutDate,setCheckoutDate] = useState('')
    const [numRooms,setNumRooms] = useState(1)
    const navigae = useNavigate()
    const incrementRoom = () => {
        setNumRooms(numRooms + 1)
    }
    const decrementRooms = () => {
        if (numRooms > 1){
            setNumRooms(numRooms - 1)
        }
    }

    const handleSubmit = () => {
     navigae('/book',{state:{checkInDate,checkOutDate,numRooms}})
    }
  return (
    <div>
        <Nav/>
        <div className='home-container'>
            <div className='home-card mt-3 home-align'>
                <div>
                <h4 className='mt-4 ml-5 mr-5'>Work from Ladakh</h4>
                <p className='ml-5 mr-5'>India's first true digital tourism ecosystem</p>
                </div>
                <div>
                    <img className='home-image' src = 'https://media.istockphoto.com/id/1061972184/photo/landscape-of-snow-mountains-and-mountain-road-to-nubra-valley-in-leh-ladakh-india.jpg?s=612x612&w=0&k=20&c=i0pA6oVMEzUgBLp5V7CblN1wPwOO7A2D3orhfi7HGe4=' alt='mountain'/>
                </div>
            </div>
        </div>
        <div className='home-container'>
            <div className='book-card mt-3'>
            <div className='card-align ml-5 mt-3'>
                <div className='card-input-align mr-4'>
                <label>Check-in Date</label>
                <input type = 'date' value={checkInDate} onChange={(e) => setCheckinDate(e.target.value)}/>
                </div>
                <div className='card-input-align mr-4'>
                <label>Check-out Date</label>
                <input type = 'date' value={checkOutDate} onChange={(e) => setCheckoutDate(e.target.value)}/>
                </div>
                <div className='card-input-align mr-4'>
                <label>Rooms</label>
                <div className='card-align'>
                <button className='mr-3 decrement-button' onClick={decrementRooms}>-</button>
                <p className='mr-3'>{numRooms}</p>
                <button className='mr-3 increment-button' onClick={incrementRoom}>+</button>
                </div>
                </div>
                <button className='mr-3 mt-3 button' type='submit' onClick={handleSubmit}>Book</button>
                </div>
            </div>
        </div>
        <div id = 'services' >
            <h2 className='text-center mt-5 mb-4'>Services</h2>
            <div className='services-container'>
            <div className='services-card text-center ml-5 mr-3'>
            <FaWifi className='icon mt-5'/>
             <h3>High Speed Internet</h3>
             <p>Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working 
                spaces and dinning areas.</p>
            </div>
            <div className='services-card text-center mr-3'>
            <MdOutlineNoMeals className='icon mt-5'/>
             <h3>Healthy Meals</h3>
             <p>A healthy breakfast and pleasant
dinner will be serviced at your space
every single day for your entire
duration of stay with option of paid
order within BriSphere.</p>
            </div>
            <div className='services-card text-center mr-5'>
            <MdHomeFilled className='icon mt-5'/>
             <h3>Homely Stay</h3>
             <p>Designed for working professionals
with spacious interiors, comfortable
beds and sleekly attached kitchen
are some of the comforts providedin
your space.</p>
            </div>
            </div>
            <div className='services-container mt-5'>
            <div className='services-card text-center ml-5 mr-3'>
            <FaCar className='icon mt-5'/>
             <h3>Transportation</h3>
             <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
            </div>
            <div className='services-card text-center mr-3'>
            <IoBicycle className='icon mt-5'/>
             <h3>Food Delivery</h3>
             <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
            </div>
            <div className='services-card text-center mr-5'>
            <FaCar className='icon mt-5'/>
             <h3>Rental Service</h3>
             <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
            </div>
            </div>
            <div className='services-container mt-5'>
            <div className='services-card text-center ml-5 mr-3'>
            <CiMap className='icon mt-5'/>
             <h3>Tourism</h3>
             <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
            </div>
            <div className='services-card text-center mr-3'>
            <IoFlag className='icon mt-5'/>
             <h3>Job</h3>
            <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
            </div>
            <div className='services-card text-center mr-5'>
            <FaCartShopping className='icon mt-5'/>
             <h3>Online Shop</h3>
             <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
            </div>
            </div>
        </div>
        <div className='payment-bottom mt-4' id='about'>
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

export default Home