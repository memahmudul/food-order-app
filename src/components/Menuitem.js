import React from 'react';
import '../styles/Menu.css'

function Menuitem({image,title,price}) {
  return (
      <div className="card">
          <img src={image} alt="" />
         <div className="content">
         <h3>{title}</h3>
          <p>{`$${price}`}</p>
         </div>
      </div>
  );
}

export default Menuitem;
