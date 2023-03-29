import React from 'react';
import {  SubHeading } from '../../components';
import { images} from '../../constants';

const FindUs = () => (
  <div className='background wrapper padding'id='contact'>
    <div className='wrapper-info'>
      <SubHeading title='contact'/>
      <h1 className='headtext'style={{marginBottom:'3rem'}}>Locate Us</h1>
      <div className='wrapper-content'>
        <p className='p__opensans'>Block 4 maitaima abuja cresent 43-125</p>
        <p className='p__cormorant'style={{color:'#DCCA87',margin:'2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>Mon-Fri 10:00am-18:00pm</p>
        <p className='p__opensans'>sat-sun 10:00am-21:00pm</p>
      </div>
      <button className='button'style={{marginTop:'2rem'}}>Contact us</button>
    </div>
    <div className='wrapper-img'>
      <img src={images.findus} alt='contact'/>
    </div>
  </div>
);

export default FindUs;
