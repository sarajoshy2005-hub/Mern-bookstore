import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
   <Header/>
     {/* Hero section */}
     <div style={{height:"600px"}} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover text-white '>
     <div style={{height:"600px",backgroundColor:"rgba(0,0,0,0.4)"}} className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-6xl  font-bold'>Wonderful Gifts</h1>
      <p>Gift your family and friends a book</p>
      <div className='mt-5 flex items-center'>
        <input type="text" placeholder='Search a book' className='bg-white text-black rounded-3xl w-100 p-2'/>
        <FaSearch className='text-gray-500 cursor-pointer' style={{marginLeft:"-40px"}}/>
      </div>
     </div>
     </div>
     {/* new arrivals */}
     <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
      <h1 className='text-3xl font-bold '>NEW ARRIVALS</h1>
      <h1 className='text-4xl my-2  '>Explore our latest Collections</h1>
      <div className='md:grid grid-cols-4 w-full my-10'>
        <div className='shadow rounded p-3 m-4 md:my-0'>
        <img width={'100%'} height={'100px'} src="https://th.bing.com/th/id/OIP.3_Jmn-iCbnoteuIyENYE3AHaJP?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book" />
        <div className='flex flex-col justify-center items-center mt-4'>
          <h2 className='text-blue-700 font-bold text-2xl'>Author</h2>
          <h3 className='text-lg font-bold '>Title</h3>
          <p className='font-bold text-red-500'>$ 123</p>
        </div>
        </div>

      </div>
      
      <Link to={'/books'}  className='bg-black p-2 text-white rounded '>Explore more..</Link>

     </section>
     {/* Author */}
     <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40 my-5'>
      <div className='text-center'> 
        <h2 className='font-bold text-xl'>FEATURED AUTHORS</h2>
        <h3 className='text-xl'>Captivates with Every word</h3>
        <p className='text-justify my-5'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
        <p className='text-justify'>Our Author Features include:</p>
        <p className='text-justify my-4'><span className='font-bold'>✨ Author Profiles :</span> Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>
        <p className='text-justify'><span className='font-bold'>📖 Published Works :</span> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>
        <p className='text-justify my-4'><span className='font-bold'>🎤 Interviews & Insights :</span> Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>
      </div>
      <div className='p-5'>
        <img src="https://th.bing.com/th/id/OIP.OIzfIVOuQul6gqgeKNZqiAHaGu?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
      </div>
     

     </section>
     {/* testimonials */}
     <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
      <h1 className='text-3xl font-bold '>TESTIMONIALS</h1>
      <h1 className='text-4xl my-2  '>See What Others Are Saying</h1>
      <div className='my-5 flex flex-col justify-center items-center'>
        <img  width={"200px"} height={"200px"}src="https://img.freepik.com/premium-photo/passport-photo-man-welldressed-caucasian-businessman-suit-tie-smiling-id-portrait_817921-61256.jpg?w=2000" alt="man" style={{borderRadius:"50%"}} />
        <h3 className='my-5'>Luthur King</h3>
        <p className='text-justify'>This bookstore consistently delivers an exceptional experience. The collection is well‑curated, spanning classics, contemporary titles, and niche genres that are often hard to find elsewhere. The team is knowledgeable, attentive, and always ready to help readers discover exactly what they’re looking for. It’s a reliable destination for anyone who values quality and service.</p>

      </div>
    
     </section>

<Footer/>
    </>
  )
}

export default Home
