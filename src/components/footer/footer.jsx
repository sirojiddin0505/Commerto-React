import React from 'react'
import "./footer.css"
import footer1 from "../footer/images/footer1.svg"
import footer2 from "../footer/images/footer2.svg"

const footer = () => {
  return (
    <footer>
    <div className="container footer__container">
        <div className="footer__box">
            <div className="footer__logo">
                <img src={footer2} alt="" className='footer__img'/>
            </div>
            <div className="footer__left">
                <h2 className="footer__title">Quick Links</h2>
                <span className="footer__span1">
                    <a href="#" className="footer__link">Sing Up</a>
                    <a href="#" className="footer__link">About Us</a>
                </span>
            </div>
            <div className="footer__center">
                <h2 className="footer__title">Others</h2>
                <span className="footer__span1">
                    <a href="#" className="footer__links">Users FAQs</a>
                    <a href="#" className="footer__links">Contact Us</a>
                    <a href="#" className="footer__links">Legal</a>
                    <a href="#" className="footer__links">Privacy Policy</a>
                    <a href="#" className="footer__links">Terms and Conditions</a>
                </span>
            </div>
            <div className="footer__1">
                <h2 className="footer__title">Products</h2>
                <span className="footer__span1">
                    <a href="#" className="footer__link">Send</a>
                    <a href="#" className="footer__link">Receive</a>
                    <a href="#" className="footer__link">Buy</a>
                </span>
            </div>
            <div className="footer__right">
                <p className="footer__text">Subscribe to our newsletter and be the first to know about our updates</p>
            </div>
        </div>
        {/* <hr> */}
        <span className="footer__span">
            <p className="footer__info">Copyright © 2020. All rights reserved.</p>
            <img src={footer1} alt="" className='footer__img'/>
        </span>
    </div>
   </footer>
  )
}

export default footer