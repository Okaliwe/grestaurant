import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import { images,data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='specialmenu padding flex'id='menu'> 
    <div className='special-title'>
      <SubHeading title='Dishes that taste great'/>
      <h1 className='headtext'>Todays special</h1>
    </div>
    <div className='special-menu'>
      <div className='winemenu flex'>
        <p className='heading'>wine & Beer</p>
        <div className='special-items'>
          {data.wines.map((wine,idx)=>(
            <MenuItem key={wine.title+idx}title={wine.title}price={wine.price}tags={wine.tags}/>
          ))}
        </div>
      </div>
      <div className='menu-img'>
        <img src={images.menu} alt='images'/>
      </div>
      <div className='Cocktailmenu flex'>
        <p className='heading'>Cocktails</p>
        <div className='special-items'>
          {data.cocktails.map((cocktail,idx)=>(
            <MenuItem key={cocktail.title+idx}title={cocktail.title} price={cocktail.price}tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop:'15px'}}>
      <button type='button'className='button'>View more</button>
    </div>
  </div>
);

export default SpecialMenu;
