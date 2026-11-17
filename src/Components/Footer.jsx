import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <>
  <div className='md:grid grid-cols-3 md:gap-10 bg-black text-white p-10'> 
    {/* About us */}
    <div>
      <h4 className='font-bold'>ABOUT US</h4>
      <p className='mt-5 text-justify'>We believe books are more than just pages - they are windows into new worlds,teeachersof wisdom,and cpmpanions for life of our journey begins with a pasion for storytelling and a mission to make reading accesible,enjoyableand inspring for everyone</p>
    </div>
    {/* News letter */}
    <div className='flex flex-col md:mt-0 mt-5'>
      <h4 className='font-bold '>NEWS LETTER</h4>
      <p className='my-5'>Stay upadted with our latest trends</p>
    <div className='flex'>
      <input type="text"placeholder='E-mail' className=' bg-white text-black p-2' />
      <button className='bg-yellow-500 p-2'><FaArrowRight/></button>
       </div>
    </div>
    {/* Follow us */}
    <div className='flex flex-col md:mt-0 mt-5'>
      <h4 className='font-bold '>FOLLOW US</h4>
      <p className='my-5'>Lets us to be social</p>
    <div className='flex'>
      <FaFacebook/>
      <FaInstagram className='mx-5'/>
      <FaTwitter/>
      <FaEnvelope className='mx-5'/>
       </div>
    </div>

  </div>
    </>
  )
}

export default Footer
