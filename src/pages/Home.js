import React from 'react';
import banner from '../assets/banner.jpg'
import '../styles/Home.css'
import {Link} from 'react-router-dom'

function Home() {
  return (
      <section className='home' style={{backgroundImage: `url(${banner})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
          <div className="content">
          <h1>Food Corner</h1>
          <h3>bangladeshi Food at your click</h3>
          <Link to="/order" className='btn'>ORDER NOW</Link>
  
          </div>
      </section>
  );
}

export default Home;
