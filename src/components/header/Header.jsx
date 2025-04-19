import React from 'react'
import "./header.css"
import logo from "../header/images/logo.svg"
import header1 from "../header/images/header1.svg"
import header2 from "../header/images/header2.svg"
import phone from "../header/images/phones.svg"

function Header() {
  return (
    <>
     <header>
        <div className="container header__container">
            <div className="header__box">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <div class="header__list">
                    <a href="#" className="header__link"><p className="header__texts">HOME</p></a>
                    <a href="#" className="header__link"><p className="header__texts">ABOUT</p></a>
                    <a href="#" className="header__link"><p className="header__texts">CONTACT US</p></a>
                </div>
                <div className="hum__menu">≡</div>
            </div>
            <div className="header__boxs">
                <div className="header__left">
                    <h1 className="header__title">New E-commerce App best for You</h1>
                    <p className="header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed vulputate vitae velit dictum cursus amet. Turpis donec ut velit quis. Cursus commodo, eget urna, sapien amet. </p>
                    <span>
                        <a href="#"><img src={header1} alt=""className='header__pic' /></a>
                        <a href="#"><img src={header2} alt="" className='header__pic' /></a>
                    </span>
                </div>
                <div className="header__right">
                    <img src={phone} alt="phone" className='header__img'/>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}
export default Header;
