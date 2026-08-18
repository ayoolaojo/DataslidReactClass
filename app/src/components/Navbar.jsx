import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-black text-white p-4'>
          <h1>Dataslid</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>  
            <Link to="/products">Products</Link>  
            

        </nav>
  )
}

export default Navbar
