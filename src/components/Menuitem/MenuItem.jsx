import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className='menu-item'>
    <div className='menuitem-head'>
      <div className='menuitem-name'>
        <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
      </div>
       <div className='dash'/>
      <div className='menuitem-price'>
        <p className='p__cormorant' style={{color:'#ffff'}}>{price}</p>
      </div>
    </div>
    <div className='submenu'>
      <p className='opensans' style={{color:'#AAA'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
