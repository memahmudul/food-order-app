import React from 'react';
import '../styles/Footer.css'
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
function Footer() {
  return (
      <section className="footer">
          <div className="icon-container">
          <FontAwesomeIcon icon={faFacebookF} className='icon'/>
          <FontAwesomeIcon icon={faFacebookF} className='icon'/>
          <FontAwesomeIcon icon={faFacebookF} className='icon'/>
          <FontAwesomeIcon icon={faFacebookF} className='icon'/>

          </div>
          <h3>created by <span>mahmudul hasan</span>| all rights reserved</h3>
      </section>
  );
}

export default Footer;
