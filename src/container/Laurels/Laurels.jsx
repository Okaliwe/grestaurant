import React from 'react';
import { SubHeading } from '../../components';
import { images,data } from '../../constants';
import './Laurels.css';

const AwardCard=({award:{imgUrl,title,subtitle}})=>(
  <div className='awards-card'>
    <img src={imgUrl} alt='img'/>
    <div className='award-content'>
      <p className='p__cormorant'style={{color:'#DCCA87'}}>{title}</p>
      <p className='p__cormorant'style={{color:'#fff'}}>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='background wrapper padding'id='awards'>
    <div className='wrapper-info'>
        <SubHeading title='Awards & recognition'/>
        <h1 className='headtext'>Our Laurels</h1>
        <div className='laurels'>
          {data.awards.map((award)=><AwardCard award={award} key={award.title}/>)}
        </div>
    </div>
    <div className='wrapper-img'>
      <img src={images.laurels}alt='laurels'/>
    </div>
  </div>
);

export default Laurels;
