import React from 'react'
import "./section.css"
import section1 from "../section/images/section1.svg"
import section2 from "../section/images/section2.svg"
import section3 from "../section/images/section3.svg"

const section = () => {
  return (
    <section>
    <div className="container section__container">
        <h1 className="section__title">How it works</h1>
        <ul className="section__list">
            <li className="section-item">
                <img src={section1} alt="" className='section__img'/>
                <h3 class="section__subtitle">Create a new accaunt</h3>
                <p className="section__info">Lorem ipsum dolor sit amet, consecteteu</p>
            </li>
            <li className="section-item">
                <img src={section2} alt="" className='section__img'/>
                <h3 className="section__subtitle">Get authorization</h3>
                <p className="section__info">Lorem ipsum dolor, sit amet consectetur </p>
            </li>
            <li className="section-item">
                <img src={section3} alt="" className='section__img'/>
                <h3 className="section__subtitle">Enjoy the app</h3>
                <p className="section__info">Lorem ipsum dolor, sit amet consectetur </p>
            </li>
        </ul>
    </div>
</section>
  )
}

export default section