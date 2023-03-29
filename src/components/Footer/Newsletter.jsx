import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='newsletter'>
    <div className='newsletter-heading'>
      <SubHeading title='Newsletter'/>
      <h1 className='headtext'>Subscribe To Our Newsletter</h1>
      <p className='p__opensans'> And Never miss Latest updates</p>
    </div>
    <div className='newsletter-input flex'>
      <input type='email'placeholder='Enter your email address'/>
      <button className='button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
