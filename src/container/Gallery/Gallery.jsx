import React, { useRef } from 'react';

import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images} from '../../constants';
import './Gallery.css';

const photoimages=[images.gallery01,images.gallery02,images.gallery03,images.gallery04]

const Gallery = () => {
  const scrollRef=useRef(null)
  const scroll=(direction)=>{
 const {current}=scrollRef
 if(direction==='left'){
  current.scrollLeft-=300
 }else{
  current.scrollLeft+=300
 }
  }
  return(
    <div className='gallery flex'>
      <div className='gallery-content'>
        <SubHeading title='instagram'/>
        <h1 className='headtext'>Photo Gallery</h1>
        <p className='p__opensans'style={{color:'#AAA',marginTop:'2rem'}}>Traditionally the most expensive dining experience.Typically multi-course,elegant a la carte or prix fixe menu options</p>
        <button type='button'className='button'>view more</button>
      </div>
      <div className='gallery-images'>
        <div className='gallery-images-container'ref={scrollRef}>
          {photoimages.map((image,idx)=>(
            <div className='gallery-images-card flex'key={`gallery_image-${idx+1}`}>
              <img src={image} alt='gallery'/>
              <BsInstagram className='gallery-icons'/>
            </div>
          ))}
        </div>
        <div className='gallery-arrows'>
          <BsArrowLeftShort className='gallery-arrow'onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallery-arrow'onClick={()=>scroll('right')}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
