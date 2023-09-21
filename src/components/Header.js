import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    <header className='flex items-center justify-between p-8 bg-orange-500 mt-5 text-black font-bold'>
        <div>
            <Link to = "/">
            <h2>LOGO</h2>
            </Link>
        </div>
        <nav>
            <ul className='flex items-center justify-between'>
                <Link to="/products"> Products </Link>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header