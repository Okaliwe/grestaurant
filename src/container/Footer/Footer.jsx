import React from 'react';

import {FooterOverlay,Newsletter } from '../../components';
import{FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='footer padding'>
    <FooterOverlay/>
    <Newsletter/>
    <div className='footer-links'>
      <div className='footer-links-contact'>
          <h1 className='footer-headtext'>Contact us</h1>
          <p className='p__opensans'>6w 67th st, Wales Uk WA 100034</p>
          <p className='p__opensans'>+234-897-67</p>
          <p className='p__opensans'>+2340732643194</p>
      </div>
      <div className='footer-links-logo'>
          <div className='fav'><h1>EMIFAV</h1></div>
          <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others</p>
          <img src={images.spoon} alt='spoon' className='spoon__img'style={{marginTop:15}}/>
          <div className='footer-icons'>
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
          </div>
      </div>
      <div className='footer-links-work'>
          <h1 className='footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>08:00am-18:00pm</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>07:00am-23:00pm</p>
      </div>
    </div>
    <div className='footer-copyright'>
      <p className='p__opensans'>2021 Emifavu.All Right researved</p>
    </div>
  </div>
);

export default Footer;
