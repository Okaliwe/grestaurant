import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className='header wrapper padding'id='home'>
    <div className='wrapper-info'>
       <SubHeading title='Cherish and pursue the new flavour'/>
       <h1 className='headtext'>The Aroma of a lifetime</h1>
       <p className='p__opensans' style={{margin:'2rem 0'}}>Traditionally the most expensive dining experience.Typically multi-course,elegant a la carte or prix fixe menu options</p>
       <button className='button'>Explore menu</button>
    </div>
    <div className='wrapper-img'>
      <img src={images.welcome} alt='image'/>
    </div>
  </div>
);

export default Header;
