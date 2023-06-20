import React from 'react'
import  './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>martiejarque@gmail.com</h5>
            <a href="mailto:martiejarque@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+34 675 843 635</h5>
            <a href="https://wa.me/+34675843635" target="_blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name"  placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name='message' rows="7" placeholder='Your message' required />
          <button type='submit' className='btn btn-primary'> Send Message  </button>
        </form>
      </div>
    </section>
  )
}

export default Contact