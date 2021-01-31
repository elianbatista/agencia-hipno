import React, { useState, useEffect } from 'react'

import Banner1 from '../../images/banner/banner1.png'
import Banner1Mobile from '../../images/banner/banner1-mobile.png'
import Banner2 from '../../images/banner/banner2.png'
import Banner2Mobile from '../../images/banner/banner2-mobile.png'
import Banner3 from '../../images/banner/banner3.png'
import Banner3Mobile from '../../images/banner/banner3-mobile.png'
import RightArrow from '../../images/icons/right-arrow.png'

import Fade from 'react-reveal/Fade'

import './styles.scss'
import './responsive.scss'

const Banner = () => {

  const [banner, setBanner] = useState(0)

  useEffect(() => {
    setBanner(1)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (banner !== 3) {
        //setBanner(banner + 1)
      } else {
        //setBanner(1)
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [banner])

  return (
    <div className="carousel">
      <Fade when={banner === 1 ? true : false}>
        <div className={banner === 1 ? 'box-carousel first active' : 'box-carousel first'}>
          <div className="content-img">
            <Fade left delay={300} when={banner === 1 ? true : false}>
              <img src={Banner1} class="desktop" alt="Banner 1 Desktop Agência Hipno"/>
              <img src={Banner1Mobile} class="mobile" alt="Banner 2 Desktop Agência Hipno"/>
            </Fade>
          </div>
          <div className="content-title">
            <Fade right delay={600} duration={1400} when={banner === 1 ? true : false}>
              <h1>
                Reencontre sua <strong>marca</strong> <br/>
                na internet com a gente!
              </h1>
            </Fade>
          </div>
          <div className="content-info">
            <div className="sub-title">
              <Fade right delay={900} when={banner === 1 ? true : false}>
                <div className="line"></div>
              </Fade>
              <Fade right delay={1000} when={banner === 1 ? true : false}>
                <span>
                  Conte com nosso apoio!
                </span>
              </Fade>
            </div>
            <Fade right delay={1100} when={banner === 1 ? true : false} duration={1400}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco 
              </p>
            </Fade>
            <div className="content-button">
              <Fade right delay={1200} when={banner === 1 ? true : false}>
                <button>
                  <span>
                    Desenvolvimento
                  </span>
                  <div className="icon">
                    <img src={RightArrow} alt="Seta pra Direita"/>
                  </div>
                </button>
              </Fade>
              <Fade right delay={1300} when={banner === 1 ? true : false}>
                <button>
                  <span>
                    Design
                  </span>
                  <div className="icon">
                    <img src={RightArrow} alt="Seta pra Direita"/>
                  </div>
                </button>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
      <Fade left when={banner === 2 ? true : false}>
        <div className={banner === 2 ? 'box-carousel second active' : 'box-carousel second'}>
          <div className="content-box-carousel">
            <div className="content-img">
              <Fade left delay={300} when={banner === 2 ? true : false}>
                <img src={Banner2} class="desktop" alt="Banner 2 Desktop Agência Hipno"/>
                <img src={Banner2Mobile} class="mobile" alt="Banner 2 Mobile Agência Hipno"/>
              </Fade>
            </div>
            <div className="content-info">
              <h1>
                <span className="blue-title"><strong>Dê vida</strong> para seu negócio e use</span> <br/>
                <span className="orange-title">a internet a seu favor</span>
              </h1>
              <div className="sub-title">
                <div className="line"></div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco 
                </span>
              </div>
              <div className="content-button">
                <button>
                  <span>
                    Fale com a gente
                  </span>
                  <div className="icon">
                    <img src={RightArrow} alt="Seta pra Direita"/>
                  </div>
                </button>
                <button>
                  <span>
                    Confira nosso blog!
                  </span>
                  <div className="icon">
                    <img src={RightArrow} alt="Seta pra Direita"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade left when={banner === 3 ? true : false}>
        <div className={banner === 3 ? 'box-carousel third active' : 'box-carousel third'}>
          <div className="content-img">
            <img src={Banner3} class="dekstop" alt="Banner 3 Agência Hipnos"/>
            <img src={Banner3Mobile} class="mobile" alt="Banner 3 Mobile Agência Hipnos"/>
          </div>
          <div className="content-title">
            <h1>
              Do <strong>logotipo</strong> ao <strong>website</strong> <br/>
              deixe tudo com a gente!
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
                  Veja nosso portfólio!
                </span>
                <div className="icon">
                  <img src={RightArrow} alt="Seta pra Direita"/>
                </div>
              </button>
              <button>
                <span>
                  Confira nosso insta!
                </span>
                <div className="icon">
                  <img src={RightArrow} alt="Seta pra Direita"/>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Fade>
      <div className={banner === 1 ? 'content-dots first' : banner === 2 ? 'content-dots second' : banner === 3 ? 'content-dots third' : 'content-dots'}>
        <div className={banner === 1 ? 'dot active' : 'dot'} onClick={() => setBanner(1)}></div>
        <div className={banner === 2 ? 'dot active' : 'dot'} onClick={() => setBanner(2)}></div>
        <div className={banner === 3 ? 'dot active' : 'dot'} onClick={() => setBanner(3)}></div>
      </div>
    </div>
  )
}

export default Banner
