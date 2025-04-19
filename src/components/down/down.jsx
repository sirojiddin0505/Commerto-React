import React from 'react'
import "./down.css"
import downs from "../down/images/downs.svg"
import down1 from "../down/images/down1.svg"
import down2 from "../down/images/down2.svg"

const down = () => {
  return (
    <div className="down">
    <div className="container down__container">
        <div className="down__left">
            <img src={downs} alt="" className='down__img' />
        </div>
        <div className="down__right">
            <h2 className="down__title">Download app to enjoy more</h2>
            <p className="down__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae porro quaerat quisquam facilis, dolores magnam hic eligendi, quo, velit libero aut incidunt unde mollitia consequatur.</p>
            <span>
                <img src={down1} alt="" className='down__pic' />
                <img src={down2} alt="" className='down__pic' />
            </span>
        </div>
    </div>
</div>
  )
}

export default down