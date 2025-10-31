import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
      <Navbar />
      <div className='flex flex-col items-center justify-center text-center'>
        <Header />
      </div>
    </div>
  )
}

export default Home
