import React from 'react';
import './intro.css';
import bg from '../../assets/profile.png';
import hire from '../../assets/hire.png';
import { Link } from 'react-scroll';

export const intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introTxt'>I'm <span className='name'>Nazia</span><br/>Website Designer</span>
            <p className='introPara' >I'm a skilled and passionate web developer with experience in creating visually appealing websites.</p>
            <Link><button className='btn' onClick={()=>{
              document.getElementById('ctPage').scrollIntoView({behavior: 'smooth'});
            }}><img src={hire} alt="" className='hire'/>Contact me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}
export default intro;