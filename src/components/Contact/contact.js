import React, { useRef }from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import './contact.css';
import l1 from '../../assets/l1.PNG';
import l2 from '../../assets/l2.PNG';
import l3 from '../../assets/l3.PNG';
import l4 from '../../assets/l4.PNG';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_5kw7756', 'template_75b0b1n', form.current, '-_IFkWgoWlYfwcVla'
          )
          .then(
            () => {
              swal('SUCCESS!',"I'll get back to you ASAP :)");
            },
            (error) => {
              swal('FAILED TO SEND', "Please try again later :(");
            },
          );
      };

  return (
    <section id='ctPage'>
      <span className='ctTitle'>Contact</span>
      <span className='ctText'>Get in touch :)</span>
      <div className='cts'>
        <form className='ctForm' ref={form}  onSubmit={sendEmail}>
        <input className='txt'type='text' name='from_name' placeholder='Your Name'/>
        <input className='email'type='email' name='from_email'placeholder='Your Email'/>
        <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
        <button className='submitBt'type='submit' value="Send">Send</button>
        </form>
        <div className='Links'>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                <img src={l1} className='link' alt="X"/>
            </a>
            <a href="mailto:naziahassan2288@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={l2} className='link' alt="Gmail"/>
            </a>
            <a href="https://www.linkedin.com/in/naziahassan004/" target="_blank" rel="noopener noreferrer">
                <img src={l3} className='link' alt="LinkedIn"/>
            </a>
            <a href="https://pin.it/5d8X7WWr5" target="_blank" rel="noopener noreferrer">
                <img src={l4} className='link' alt="Pinterest"/>
            </a>
        </div>

      </div>
    </section>
  )
}

export default Contact
