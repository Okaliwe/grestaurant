import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';


const AboutUs = () => (
  <div className='Aboutus background padding flex'id='about'>
    <div className='Aboutus-overlay flex'>
       <img src={images.G} alt='images'/>
    </div>
    <div className='aboutus-content flex'>
      <div className='left-content'>
        <h1 className='headtext'>About Us</h1>
        <img src={images.spoon} alt='spoonimage' className='spoon__img'/>
        <p className='p__opensans'>FavDan, We specialize in cakes, Meat pie, Fish pie, shawarma, cupcakes, cookies, donuts, Spring rolls, breads, and custom-made cakes and cupcakes</p>
        <button type='button'className='button'>Discover More</button>
      </div>
      <div className='knife-img' flex>
        <img src={images.knife} alt='knife'/>
      </div>
      <div className='right-content'>
        <h1 className='headtext'>Our Journey</h1>
        <img src={images.spoon} alt='spoonimage' className='spoon__img'/>
        <p className='p__opensans'>FAVDAN Cakes is a small, local baker in,Nigeria owned by praise favour and matilda. We will specialize in cakes, Meat pie, Fish pie, shawarma, cupcakes, cookies, donuts, Spring rolls and breads</p>
        <button type='button'className='button'>Discover More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
