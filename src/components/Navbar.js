import React, { useState } from "react";
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome'
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <header className="header">
    <Link  to="/"><img src={logo} alt="" /></Link>
    <nav className={`navbar ${open?'active':''}`}>
    <Link className="link" to="/">Home</Link>
    <Link className="link" to="/menu">Menu</Link>
    <Link className="link" to="/about">About</Link>
    <Link className="link" to="/contact">Contact</Link>
        
    </nav>
   <FontAwesomeIcon icon={open? faTimes : faBars} className="fontIcon" onClick={()=>setOpen(!open)}/>

    </header>
   
  );
}

export default Navbar;
