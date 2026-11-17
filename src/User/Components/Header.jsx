import React, { useState } from 'react'
import { FaBars, FaFacebookSquare, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  const[toggle,settoggle] = useState(false)
  return (
    <>
    {/* {Header top part} */}
    <div className='grid grid-cols-3 p-3'>
       {/* logo */}
       <div className='flex items-center'>
        <img  width={'50px'} height={'50px'} src="https://media.istockphoto.com/id/482780110/photo/open-book-isolated-on-a-white-background.jpg?s=170667a&w=0&k=20&c=hiiEtrz2xJPxCpm-FTxpHn_u7QQC0YVeaqEGaGtszS8=" alt="logo" />
        <h1 className='text-2xl ms-3 font-bold md:hidden'>BookStore</h1>
       </div>
       {/* title */}
       <div className='md:flex justify-center items-center hidden'>
         <h1 className='text-3xl font-bold '>BookStore</h1>
       </div>
       {/* login */}
       <div className=' md:flex items-center justify-end hidden'>
        <FaInstagram/>
        <FaTwitter className='mx-2'/>
        <FaFacebookSquare/>
        <Link to={'/login'} className='flex justify-center items-center ms-5 border rounded px-3 py-2 hover:bg-black hover:text-white'> <FaUser className='me-1'/>Login</Link>
       </div>


      </div> 
           {/* Navigation part */}
           <nav className='bg-black w-full text-white md:flex justify-center items-center p-3 '>
            {/* Menu and Login at small screen */}
           <div className='flex justify-between items-center text-2xl md:hidden'>
            <button onClick={()=>settoggle(!toggle)}><FaBars/></button>
             <Link to={'/login'} className='flex justify-center items-center ms-5  px-3 py-2 hover:bg-black hover:text-white'> <FaUser className='me-1'/>Login</Link>


           </div>

            <ul className={ toggle ? 'flex flex-col' : 'md:flex hidden'}>
              <li><Link to={'/'} className='md:mx-4'>HOME</Link></li>
              <li><Link to={'/books'}  className='md:mx-4'>BOOKS</Link></li>
              <li><Link to={'/contact'}  className='md:mx-4'>CONTACT</Link></li>
            </ul>
           </nav>
    </>
  )
}

export default Header
