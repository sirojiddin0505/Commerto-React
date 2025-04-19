import React from 'react'
import "./hero.css"
import hero from "../Hero/images/hero.svg"
import hero1 from "../Hero/images/hero1.svg"

const Hero = () => {
  return (
    <hero>
        <div className="container hero__container">
            <h1 className="hero__title">What our client say</h1>
        <div className="hero__box">
            <div className="hero__left">
                <img src={hero} alt="" className='hero__img'/>
            </div>
            <div className="hero__right">
                <img src={hero1} alt="" className='hero__img'/>
                <p className="hero__text">Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.</p>
                <h3 className="hero__subtitle">Angel Paulina</h3>
            </div>
        </div>
        </div>
    </hero>
)
}

export default Hero