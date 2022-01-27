import React from 'react';
import '../styles/Menu.css'

import MenuList from '../data/data';
import Menuitem from '../components/Menuitem';

function Menu() {
    const renderedList = MenuList.map((menu,i)=>{
        return <Menuitem key={i} image={menu.image} title={menu.name} price={menu.price}/>

    })
  return (
      <section className="menu">
      <h1 className="heading">Our Menu</h1>
      <div className="card-container">
         {renderedList}
      </div>

      </section>
  );
}

export default Menu;
