import React from 'react'
import { Link } from 'react-router-dom'
function NavigationMenu({closeMenu}) {
  return (
    <ul className="fixed bg-white top-0 left-0 w-4/5 h-full z-10 shadow p-3">
        <div className='text-cyan-800 font-bold py-3'>
          <h1>Menu Displayed</h1>
        </div>
        <li>
          <Link 
          className='py-2 block border-t border-b'
          onClick={closeMenu}
          to="/">Home</Link>
        </li>
        <li>
          <Link 
          className='py-2 block border-b'
          onClick={closeMenu}
          to="/services">Services</Link>
        </li>
        <li>
          <Link 
          className='py-2 block border-b'
          onClick={closeMenu}
          to="/contact">Contact</Link>
        </li>
        <li>
          <Link 
          className='py-2 block border-b'
          onClick={closeMenu}
          to="/about">About</Link>
        </li>
        <li>
          <Link 
          className='py-2 block border-b'
          onClick={closeMenu}
          to="/product">Product</Link>
        </li>
      </ul>
  )
}

export default NavigationMenu