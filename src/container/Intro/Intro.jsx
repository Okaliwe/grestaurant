import React, { useRef, useState } from 'react';

import {BsFillPlayFill,BsFillPauseFill} from 'react-icons/bs'
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const vidRef=useRef()
  const [vid,setVid]=useState(false)

  const Handlevideo=()=>{
    setVid(!vid)
    if(vid){
      vidRef.current.pause()
    }else{vidRef.current.play()}
  }
 

  return(
    <div className='video'>
       <video src={meal}
       type='video/mp4'
       loop controls={false}
        muted
        ref={vidRef}/>
        <div className='video-overlay flex'>
           <div className='video-overlay-circle flex'onClick={Handlevideo}>{vid ?(<BsFillPauseFill color='#fff'fontSize={30}/>)
           :(<BsFillPlayFill color='#fff'fontSize={30}/>)}</div>
        </div>
    </div>
  )
 
};

export default Intro;
