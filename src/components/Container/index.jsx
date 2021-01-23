import React, { useRef, useEffect, useState } from 'react'

import Icon1 from '../../images/icons/icon1.png'
import Icon2 from '../../images/icons/icon2.png'
import Icon3 from '../../images/icons/icon3.png'
import Icon4 from '../../images/icons/icon4.png'

import DesenvolvimentoWeb from '../../images/servicos/desenvolvimento-web.png'
import Branding from '../../images/servicos/branding.png'
import WebDesign from '../../images/servicos/web-design.png'
import SuporteWeb from '../../images/servicos/suporte-web.png'

import EuSeiMarketing from '../../images/parceiros/eu-sei-marketing.png'

import BatePapo from '../../images/icons/bate-papo.png'
import Trofeu from '../../images/icons/trofeu.png'
import RightArrow from '../../images/icons/right-arrow.png'

import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'

import './styles.scss'
import './responsive.scss'

const Container = (props) => {
  const videoProcesso = useRef(null)
  const videoCallToAction = useRef(null)

  const [coordenadasProcesso, setCoordenadasProcesso] = useState(0)
  const [coordenadasCallToAction, setCoordenadasCallToAction] = useState(0)
  const [processoPlay, setProcessoPlay] = useState(false)
  const [callToActionPlay, setCallToActionPlay] = useState(false)


  useEffect(() => {
    const position_video_processo = videoProcesso.current.getBoundingClientRect()
    setCoordenadasProcesso(position_video_processo.y - position_video_processo.height - 600)
  }, [videoProcesso])

  useEffect(() => {
    const position_call_to_cation = videoCallToAction.current.getBoundingClientRect()
    setCoordenadasCallToAction(position_call_to_cation.y - position_call_to_cation.height + 400)
  }, [videoCallToAction])

  useEffect(() => {
    if(props.scroll >= coordenadasProcesso && coordenadasProcesso !== 0) {
      setProcessoPlay(true)
    }
  }, [props.scroll, coordenadasProcesso])

  useEffect(() => {
    if(props.scroll >= coordenadasCallToAction && coordenadasCallToAction !== 0) {
      setCallToActionPlay(true)
    }
  }, [props.scroll, coordenadasCallToAction])

  useEffect(() => {
    if(processoPlay) {
      videoProcesso.current.play()
    }
  }, [processoPlay])

  useEffect(() => {
    if(callToActionPlay) {
      videoCallToAction.current.play()
    }
  })

  return (
    <div className="container-section">
      <section className="sobre">
        <div className="content-title">
          <div className="content-barra">
            <div className="barra"></div>
          </div>
          <h2>
            Sobre a Hipnos
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section className="cards">
        <div className="content-cards">
          <Bounce left duration={2000} delay={200}>
            <div className="box-card purple">
              <div className="icon">
                <img src={Icon1} alt=""/>
              </div>
              <div className="title">
                Lorem Ipsum
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              </div>
            </div>
          </Bounce>
          <Bounce left duration={2000} delay={400}>
            <div className="box-card blue">
              <div className="icon">
                <img src={Icon2} alt=""/>
              </div>
              <div className="title">
                Lorem Ipsum
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              </div>
            </div>
          </Bounce>
          <Bounce left duration={2000} delay={600}>
            <div className="box-card green">
              <div className="icon">
                <img src={Icon3} alt=""/>
              </div>
              <div className="title">
                Lorem Ipsum
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              </div>
            </div>
          </Bounce>
          <Bounce left duration={2000} delay={800}>
            <div className="box-card red">
              <div className="icon">
                <img src={Icon4} alt=""/>
              </div>
              <div className="title">
                Lorem Ipsum
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              </div>
            </div>
          </Bounce>
        </div>
      </section>
      {/* <section className="parceiros">
        <h2>
          Nossos Parceiros
        </h2>
        <div className="content-parceiros">
          <Fade left delay={100}>
            <div className="parceiro">
              <img src={EuSeiMarketing} alt="Eu Sei Marketing"/>
            </div>
          </Fade>
          <Fade left delay={200}>
            <div className="parceiro">
              <img src={EuSeiMarketing} alt="Eu Sei Marketing"/>
            </div>
          </Fade>
          <Fade left delay={300}>
            <div className="parceiro">
              <img src={EuSeiMarketing} alt="Eu Sei Marketing"/>
            </div>
          </Fade>
          <Fade left delay={400}>
            <div className="parceiro">
              <img src={EuSeiMarketing} alt="Eu Sei Marketing"/>
            </div>
          </Fade>
          <Fade left delay={500}>
            <div className="parceiro">
              <img src={EuSeiMarketing} alt="Eu Sei Marketing"/>
            </div>
          </Fade>
          <Fade left delay={600}>
            <div className="parceiro">
              <img src={EuSeiMarketing} alt="Eu Sei Marketing"/>
            </div>
          </Fade>
          <Fade left delay={700}>
            <div className="parceiro">
              <img src={EuSeiMarketing} alt="Eu Sei Marketing"/>
            </div>
          </Fade>
          <Fade left delay={800}>
            <div className="parceiro">
              <img src={EuSeiMarketing} alt="Eu Sei Marketing"/>
            </div>
          </Fade>
        </div>
      </section> */}
      <section className="servicos">
        <div className="content-title">
          <div className="content-barra">
            <div className="barra"></div>
          </div>
          <h2>
            Serviços
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt  ut labore et dolore magna aliqua. Ut enim ad minim 
        </p>
        <div className="content-servicos">
          <div className="box-servico">
            <div className="icon">
              <img src={DesenvolvimentoWeb} alt="Desenvolvimento Web"/>
            </div>
            <div className="title">
              Desenvolvimento Web
            </div>
          </div>
          <div className="box-servico">
            <div className="icon">
              <img src={Branding} alt="Branding"/>
            </div>
            <div className="title">
              Branding
            </div>
          </div>
          <div className="box-servico">
            <div className="icon">
              <img src={WebDesign} alt="Web Design"/>
            </div>
            <div className="title">
              Web Design
            </div>
          </div>
          <div className="box-servico">
            <div className="icon">
              <img src={SuporteWeb} alt="Suporte Web"/>
            </div>
            <div className="title">
              Suporte Web
            </div>
          </div>
        </div>
      </section>
      <section className="nosso-time">
        <div className="content-title">
          <div className="content-barra">
            <div className="barra"></div>
          </div>
          <h2>
            Nosso Time
          </h2>
        </div>
        <div className="content-card">
          <div className="card">
            <div className="title">
              EXP
            </div>
            <p>
              Lorem ipsum dolor sit amedfdfdfdft, consectetur adipiscing elit, sed do eiusfdfdfmod tempor incididunt ut labore et dolore 
            </p>
          </div>
          <div className="card">
            <div className="title">
              3+
            </div>
            <p>
              Lorem ipsum dolor sit amedfdfdfdft, consectetur adipiscing elit, sed do eiusfdfdfmod tempor incididunt ut labore et dolore 
            </p>
          </div>
          <div className="card">
            <div className="title">
              80%
            </div>
            <p>
              Lorem ipsum dolor sit amedfdfdfdft, consectetur adipiscing elit, sed do eiusfdfdfmod tempor incididunt ut labore et dolore 
            </p>
          </div>
        </div>
        <div className="content-horizontal-card">
          <div className="card">
            <div className="icon">
              <img src={BatePapo} alt="Icone Bate Papo - Agência Hipno"/>
            </div>
            <div className="content-info">
              <div className="title">
                Transparência
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={Trofeu} alt="Icone Troféu - Agência Hipno"/>
            </div>
            <div className="content-info">
              <div className="title">
                Satisfação
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
              </p>
            </div>
          </div>
        </div>
        <div className="content-title">
          <div className="content-barra">
            <div className="barra"></div>
          </div>
          <h2>
            Nosso Processo
          </h2>
        </div>
        <div className="content-video-processo">
          <video ref={videoProcesso} muted>
            <source src="/videos/processo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="blog">
        <div className="content-title">
          <div className="content-barra">
            <div className="barra"></div>
          </div>
          <h2>
            Blog
          </h2>
        </div>
        <div className="content-posts">
          <div className="box-post">
            <div className="content-image">
              <img src="https://respostas.sebrae.com.br/wp-content/uploads/2020/06/tecnology-806x440.jpg" alt=""/>
            </div>
            <div className="content-info">
              <div className="info-post">
                <h3>
                  Teste de post novo muito interessante leiam
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore veniam, quis nostrud exercitation ullamco laboris nisi 
                  ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                </p>
              </div>
              <div className="bottom-info">
                <div className="left-side">
                  <div className="person-image">
                    <img src="https://yt3.ggpht.com/ytc/AAUvwnisZjqzQuQuxZCG-efLedEwZ_avAuN4BuN64pezMw=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                  </div>
                  <div className="content-person">
                    <div className="name">
                      João Paulo Arrombado da Silva
                    </div>
                    <div className="date">
                      Publicado em Outubro, 2022
                    </div>
                  </div>
                </div>
                <div className="right-side">
                  <div className="link">
                    Leia o artigo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-post">
            <div className="content-image">
              <img src="https://respostas.sebrae.com.br/wp-content/uploads/2020/06/tecnology-806x440.jpg" alt=""/>
            </div>
            <div className="content-info">
              <div className="info-post">
                <h3>
                  Teste de post novo muito interessante leiam
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore veniam, quis nostrud exercitation ullamco laboris nisi 
                  ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                </p>
              </div>
              <div className="bottom-info">
                <div className="left-side">
                  <div className="person-image">
                    <img src="https://yt3.ggpht.com/ytc/AAUvwnisZjqzQuQuxZCG-efLedEwZ_avAuN4BuN64pezMw=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                  </div>
                  <div className="content-person">
                    <div className="name">
                      João Paulo Arrombado da Silva
                    </div>
                    <div className="date">
                      Publicado em Outubro, 2022
                    </div>
                  </div>
                </div>
                <div className="right-side">
                  <div className="link">
                    Leia o artigo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-post">
            <div className="content-image">
              <img src="https://respostas.sebrae.com.br/wp-content/uploads/2020/06/tecnology-806x440.jpg" alt=""/>
            </div>
            <div className="content-info">
              <div className="info-post">
                <h3>
                  Teste de post novo muito interessante leiam
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore veniam, quis nostrud exercitation ullamco laboris nisi 
                  ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                </p>
              </div>
              <div className="bottom-info">
                <div className="left-side">
                  <div className="person-image">
                    <img src="https://yt3.ggpht.com/ytc/AAUvwnisZjqzQuQuxZCG-efLedEwZ_avAuN4BuN64pezMw=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                  </div>
                  <div className="content-person">
                    <div className="name">
                      João Paulo Arrombado da Silva
                    </div>
                    <div className="date">
                      Publicado em Outubro, 2022
                    </div>
                  </div>
                </div>
                <div className="right-side">
                  <div className="link">
                    Leia o artigo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action">
        <div className="content-video-call-to-action">
          <video ref={videoCallToAction} muted>
            <source src="/videos/setas-call-to-action.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="content-info">
          <h2>
            Comece seu projeto com a gente!
          </h2>
          <div className="content-button">
            <button>
              <span>
                Fale conosco
              </span>
              <div className="icon">
                <img src={RightArrow} alt="Seta pra Direita"/>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Container