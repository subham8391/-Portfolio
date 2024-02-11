import React from 'react'
import Profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa'
import './home.css';
function home() {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className='home__img' />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I`m Subham Das</span>  Web Devloper
          </h1>
          <p className="home__description">
          I am Subham Das, a skilled web developer who is passionate about building useful and interesting websites. I specialize in creating user friendly interfaces that provide outstanding user experiences.
          </p>
          <Link to='/about' className='button'>
            More About Me{' '}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block">

      </div>
    </section>
  )
}

export default home