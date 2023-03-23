import React from 'react'
import cat from '../assets/images/cat.png'

const Home = () => {
  return (
    <div className='text-center mt-5'>
      <h2>Bienvenidos a Cat Pets</h2>
      <p>La página de gatitos</p>
      <img src={cat} alt="" />
      
    </div>
  )
}

export default Home
