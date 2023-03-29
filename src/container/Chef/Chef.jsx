import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading} from '../../components';
const Chef = () => (
  <div className='background wrapper padding'>
    <div className='chef-img wrapper-img wrapper_img-reverse'>
      <img src={images.chef} alt='chef-image'/>
    </div>
    <div className='chef-content wrapper-info'>
      <SubHeading title="chef's Word"/>
      <h1 className='headtext'>What We Believe In</h1>
      <div className='hef-content'>
        <div className='chef-quote'>
          <img src={images.quote} alt='images-quote'/>
          <p className='p__opensans'>Consumers are increasingly demanding healthier ingredients in cakes, bread and pastries. Successful operators will, therefore, need to offer a greater variety of whole-grain, all-natural or bromate/gluten-free products to capitalize on these trends</p>
        </div>
        <p className='p__opensans'>Moreover, changing preferences and increasing disposable income levels are encouraging consumers to choose more premium and specialty varieties over conventional private-label products.</p>
      </div>
      <div className='chef-sign'>
        <p>Emi Fav</p>
        <p className='p__opensans'>chef and Founder</p>
        <img src={images.sign} alt='sign'/>
      </div>
    </div>
  </div>
);

export default Chef;
