import React from 'react';
import './intro.css';
import hire from '../../assets/hire.png';
import { Link } from 'react-scroll';

export const intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introTxt'>I'm <span className='name'>Nazia</span><br/>Software Developer</span>
            <Link><button className='btn' onClick={()=>{
              document.getElementById('ctPage').scrollIntoView({behavior: 'smooth'});
            }}><img src={hire} alt="" className='hire'/>Contact me</button></Link>
        </div>
    </section>
  )
}
export default intro;