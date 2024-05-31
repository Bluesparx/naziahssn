import React, {useState} from 'react';
import Download from './Download';
import './resume.css';

const Contact = () => {

  return (
    <section id='rtPage'>
      <span className='rtTitle'>Resume</span>
      <span className='rtText'>View or download resume: </span>
      <Download/>
    </section>
  )
}

export default Contact;
