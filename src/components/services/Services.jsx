import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id="services">
      <h5> What I Offer</h5>
      <h2> Services </h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*END OF UX/UI  */}

        <article className="service">
          <div className="service__head">
            <h3> WEB DEV</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEV  */}

        <article className="service">
          <div className="service__head">
            <h3> Content creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*END OF CONTENT CREATION  */}
      </div>
    
    </section>
  )
}

export default Services