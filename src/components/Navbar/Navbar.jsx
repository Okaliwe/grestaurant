import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'

import './Navbar.css';


const Navbar = () =>{
  const[toggle,setToggle]=useState(false)
return(
  <nav className='navbar'>
  <div className='logo'>
    <div id='logo'>FAVDAN</div>
  </div>
  <ul className='navbar-links'>
    <li className=' p__opensans'><a href='#home'>Home</a></li>
    <li className=' p__opensans'><a href='#about'>About</a></li>
    <li className=' p__opensans'><a href='#menu'>Menu</a></li>
    <li className=' p__opensans'><a href='#awards'>Awards</a></li>
    <li className=' p__opensans'><a href='#contact'>Contact</a></li>
  </ul>
  <div className='navbar-login'>
    <a href='#login'className='p__opensans'>Log in /Register</a>
    <div/>
    <a href='/'className='p__opensans'>Book</a>
  </div>
  <div className='login-hamburger'>
    <GiHamburgerMenu color='#ffff'fontSize={27}onClick={()=>{setToggle(true)}}/>

    {toggle &&(
       <div className='app__navbar flex__center slide-bottom'>
       <MdOutlineRestaurantMenu fontSize={27}  onClick={()=>{setToggle(false)}} className="overlay"/>
       <ul className='navbar-links-smallscreen'>
        <li className=' p__opensans'><a href='#home'>Home</a></li>
        <li className=' p__opensans'><a href='#about'>About</a></li>
        <li className=' p__opensans'><a href='#Menu'>Menu</a></li>
        <li className=' p__opensans'><a href='#Awards'>Awards</a></li>
        <li className=' p__opensans'><a href='#Contact'>Contact</a></li>
   </ul>
     </div>
    )}
    
  </div>
</nav>
)

  
}
 

export default Navbar;
