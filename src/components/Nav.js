import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <nav className='nav-align'>
          <Link to = '/'>
            <h4 className='mt-3 ml-3 payment-heading'>Brisphere</h4>
            </Link>
            <ul className='nav-align mt-4 list-font'>
                <a href='#services'><li className='mr-3'>Services</li></a>
                <a href='#about'><li className='mr-3'>About Us</li></a>
            </ul>
        </nav>
    </div>
  )
}

export default Nav