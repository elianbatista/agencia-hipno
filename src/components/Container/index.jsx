import React from 'react'

import Icon1 from '../../images/icons/icon1.png'
import Icon2 from '../../images/icons/icon2.png'
import Icon3 from '../../images/icons/icon3.png'
import Icon4 from '../../images/icons/icon4.png'

import DesenvolvimentoWeb from '../../images/servicos/desenvolvimento-web.png'
import Branding from '../../images/servicos/branding.png'
import WebDesign from '../../images/servicos/web-design.png'
import SuporteWeb from '../../images/servicos/suporte-web.png'

import EuSeiMarketing from '../../images/parceiros/eu-sei-marketing.png'

import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'

import './styles.scss'

const Container = () => {
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
      <section className="parceiros">
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
      </section>
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
          </div>
          <div className="box-servico">
            <div className="icon">
              <img src={Branding} alt="Branding"/>
            </div>
          </div>
          <div className="box-servico">
            <div className="icon">
              <img src={WebDesign} alt="Web Design"/>
            </div>
          </div>
          <div className="box-servico">
            <div className="icon">
              <img src={SuporteWeb} alt="Suporte Web"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Container