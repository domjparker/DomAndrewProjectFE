import React from 'react';
import Img from '../../image/homepage.jpg';
import './home.css'
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <p>Hello world</p>
    <img src={Img} alt='Background' className='bgimg'/>
    </>
  )
}

export default Home;