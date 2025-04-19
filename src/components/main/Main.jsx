import React from 'react'
import "./Main.css"
import main1 from "../main/images/main1.svg"
import main2 from "../main/images/main2.svg"
import main3 from "../main/images/main3.svg"

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="container main__container">
            <h1 className="main__title">What we do to help our customers idigital era.</h1>
            <ul class="main__list">
                <li className="main-item">
                    <img src={main1} alt="" className='main__img'/>
                    <h3 className="main-subtitle">Receive</h3>
                    <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam ea aut illo quo vel quibusdam neque mollitia repellendus at?</p>
                    <a href="#"><p className="main-info">Learn more...</p></a>
                </li>
                <li class="main-item">
                    <img src={main2} alt="" className='main__img'/>
                    <h3 className="main-subtitle">Send</h3>
                    <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam ea aut illo quo vel quibusdam neque mollitia repellendus at?</p>
                    <a href="#"><p className="main-info">Learn more...</p></a>
                </li>
                <li className="main-item">
                    <img src={main3} alt="" className='main__img'/>
                    <h3 className="main-subtitle">Buy</h3>
                    <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam ea aut illo quo vel quibusdam neque mollitia repellendus at?</p>
                    <a href="#"><p className="main-info">Learn more...</p></a>
                </li>
                <li className="main-item">
                    <img src={main1} alt="" className='main__img'/>
                    <h3 className="main-subtitle">Receive</h3>
                    <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam ea aut illo quo vel quibusdam neque mollitia repellendus at?</p>
                    <a href="#"><p class="main-info">Learn more...</p></a>
                </li>
                <li class="main-item">
                    <img src={main2} alt="" className='main__img'/>
                    <h3 class="main-subtitle">Send</h3>
                    <p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam ea aut illo quo vel quibusdam neque mollitia repellendus at?</p>
                    <a href="#"><p class="main-info">Learn more...</p></a>
                </li>
                <li class="main-item">
                    <img src={main3} alt="" className='main__img'/>
                    <h3 class="main-subtitle">Buy</h3>
                    <p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam ea aut illo quo vel quibusdam neque mollitia repellendus at?</p>
                    <a href="#"><p class="main-info">Learn more...</p></a>
                </li>
            </ul>
        </div>
    </div> 
    </>
  )
}

export default Main