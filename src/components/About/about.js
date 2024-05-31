import React from 'react';
import './about.css'
import s1 from '../../assets/s1.PNG';
import s2 from '../../assets/s2.PNG';
import s3 from '../../assets/s3.PNG';
import s5 from '../../assets/s5.PNG';

const About = () => {
  return (
    <section id='about'>
        <span className='abTitle'>What I do?</span>
        <span className='abText'>I like cats :)<br/>I am a 2nd year student at Indira Gandhi Delhi Technical University, pursuing BTech in computer science and engineering. Always open to learn new things and new experiences!</span>
      <div className='abTable'>
        <div className='abList'>
        <span className='abIg'><img src={s1} alt=''/></span>
          <div className='skillTxt'>
            <h2>Frontend</h2>
            <p>HTML5, CSS3, JavaScript, ReactJS</p>
          </div>
        </div>
        <div className='abList'>
        <span className='abIg'><img src={s2} alt=''/></span>
          <div className='skillTxt'>
            <h2>DSA</h2>
            <p>Data Structures and Algorithms, Computer Science Cores</p>
          </div>
        </div> 
        <div className='abList'>
        <span className='abIg'><img src={s3} alt=''/></span>
          <div className='skillTxt'>
            <h2>UI/UX</h2>
            <p>Figma, User Experience</p>
          </div>
        </div>
        <div className='abList'>
        <span className='abIg'><img src={s5} alt=''/></span>
          <div className='skillTxt'>
            <h2>Research</h2>
          </div>
        </div>
      </div>
    </section>
  )
}


export default About;
