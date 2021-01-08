import React from 'react'

import Banner1 from '../../images/banner/banner1.png'
import RightArrow from '../../images/icons/right-arrow.png'

import './styles.scss'

const Banner = () => {
  return (
    <div className="carousel">
      <div className="box-carousel first">
        <div className="content-img">
          <img src={Banner1} alt="Banner 1 Agência Hipno"/>
        </div>
        <div className="content-title">
          <h1>
            Reencontre sua <strong>marca</strong> <br/>
            na internet com a gente!
          </h1>
        </div>
        <div className="content-info">
          <div className="sub-title">
            <div className="line"></div>
            <span>
              Conte com nosso apoio!
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco 
          </p>
          <div className="content-button">
            <button>
              <span>
                Desenvolvimento
              </span>
              <div className="icon">
                <img src={RightArrow} alt="Seta pra Direita"/>
              </div>
            </button>
            <button>
              <span>
                Design
              </span>
              <div className="icon">
                <img src={RightArrow} alt="Seta pra Direita"/>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
