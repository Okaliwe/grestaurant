import React from 'react';
import {images} from '../../constants'

const SubHeading = ({title}) => (
  <div style={{maginButton:'1rem'}}>
    <p className='p__font'>{title}</p>
    <img src={images.spoon} alt='spoon-image' className='spoon__img'/>
  </div>
);

export default SubHeading;
