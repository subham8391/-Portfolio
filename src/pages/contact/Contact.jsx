import React from 'react'
import {FaEnvelopeOpen,FaPhoneSquareAlt,FaFacebookF,FaTwitter,FaLinkedin,FaGithub} from 'react-icons/fa';
import {FiSend} from 'react-icons/fi';
import './contact.css'
function Contact() {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Contact <span>Me</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
        <h3 className="contact__title">Get In Touch</h3>
        <p className="contact__description">
        Feel free to ask anything; I'm here to assist you. Don't hesitate to reach out, as I'm always available to provide guidance and support. 
        </p>
        <div className="contact__info">
          <div className="info__item">
            <FaEnvelopeOpen className='info__icon' />
            <div>
              <span className="info__title">Mail Me</span>
              <h4 className="info__desc">subham967990@gmail.com</h4>
            </div>
          </div>
          
          <div className="info__item">
            <FaPhoneSquareAlt className='info__icon' />
            <div>
              <span className="info__title">Call Me</span>
              <h4 className="info__desc">+91 9679905690</h4>
            </div>
          </div>

        </div>
        <div className="contact__social">
          <a href="https://www.facebook.com/" className='social__link'>
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/" className='social__link'>
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/feed/" className='social__link'>
            <FaLinkedin />
          </a>
          <a href="https://github.com/" className='social__link'>
            <FaGithub />
          </a>
        </div>
        </div>
        <form action="" className="contact__form">
          <div className="from__input-group">
            <div className="form__input-div">
              <input type="text" className='form__control' placeholder='Enter Your Name' />
            </div>
            <div className="form__input-div">
              <input type="email" className='form__control' placeholder='Enter Your Email' />
            </div>
            <div className="form__input-div">
              <input type="text" className='form__control' placeholder='Enter Your Subject' />
            </div>
            
          </div>
          <div className="form__input-div">
              <textarea placeholder='Enter Your Query.' className="form__control textarea"></textarea>
            </div>
            <button className="button">
              Send Message 
              <span className='button__icon contact__button-icon'>
                <FiSend />
              </span>
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact