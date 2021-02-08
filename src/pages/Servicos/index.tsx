import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import LateralMenu from '../../components/LateralMenu'
import Topo from '../../components/Topo'
import Contato from '../../components/Contato'
import Footer from '../../components/Footer'

import FotoCapaServicos from '../../images/servicos/foto-capa-servicos.jpg'
import Branding from '../../images/servicos/branding-e-design.jpg'
import DesenvolvimentoMobile from '../../images/servicos/desenvolvimento-mobile.jpg'
import DesenvolvimentoWeb from '../../images/servicos/desenvolvimento-web.jpg'
import RightArrow from '../../images/icons/right-arrow.png'

import './styles.scss'
import './responsive.scss'

const Servicos: React.FC = () => {
  let history = useHistory();
  const [menu, setMenu] = useState(false)
  const [menuBlack, setMenuBlack] = useState(false)
  const [scroll, setScroll] = useState(0) // Valor do Scroll no Wrapper
  const [contato, setContato] = useState(false)

  const [itensMenu, setItensMenu] = useState([
    {
      id: 1,
      titulo: 'Home',
      class: 'home',
      active: false,
      link: ''
    },
    {
      id: 2,
      titulo: 'Sobre',
      class: 'sobre',
      active: false,
      link: ''
    },
    {
      id: 3,
      titulo: 'Serviços',
      class: 'servicos',
      active: true,
      link: '/servicos'
    },
    {
      id: 4,
      titulo: 'Portfolio',
      class: 'portfolio',
      active: false,
      link: 'https://www.behance.net/agenciahipnos'
    }
  ])

  function handleScrollWrapper(event: any) {
    setScroll(event.target.scrollTop)
    scrollSetPage(scroll)
  }

  function handleMenu(id: number) {
    history.push('/')
  }

  function scrollSetPage(scrollValue: number) {
    if (scrollValue >= 500) {
      setMenu(true)
    } else {
      setMenu(false)
    }
  }

  return (
    <div className="container">
      <Contato active={contato} />
      <div className={contato ? 'background-gray active' : 'background-gray'} onClick={() => setContato(false)}></div>
      <LateralMenu active={menu} black={menuBlack} menu={itensMenu} handleMenu={handleMenu} />
      <div  className={contato ? 'wrapper no-scroll' : 'wrapper'} onScroll={handleScrollWrapper}>
        <Topo menu={itensMenu} handleMenu={handleMenu} setContato={setContato} />
        <section className="topo-servico">
          <div className="background-image">
            <div className="background-black"></div>
            <img src={FotoCapaServicos} alt="Foto Capa Serviços Agência Hipno"/>
          </div>
          <div className="content-info">
            <h1>
              O que nós fazemos?
            </h1>
            <h3>
              A Hipnos é uma agência digital que oferece soluções web para seu negócio, cobrindo desde a fase de concepção do projeto até sua finalização e entrega.
            </h3>
          </div>
        </section>
        <div className="content-servicos">
          <div className="box-servico">
            <div className="top-line"></div>
            <div className="left-side">
              <div className="top-title">
                <div className="number">
                  01
                </div>
                <h2>
                  Desenvolvimento Web
                </h2>
              </div>
              <p>
                Nossa equipe desenvolvedores trabalha em todas as vertentes do desenvolvimento voltado para web. Desde websites simples para divulgação de 
                informações até páginas corporativas ou plataformas de vendas. Nosso time vai encontrar a melhor solução para o seu negócio.
              </p>
              <ul>
                <li>
                  Websites
                </li>
                <li>
                  e-Commerce
                </li>
                <li>
                  Sistemas Web
                </li>
                <li>
                  Aplicações
                </li>
              </ul>
              <div className="content-button">
                <button onClick={() => setContato(true)}>
                  <span>
                    Faça um orçamento
                  </span>
                  <div className="icon">
                    <img src={RightArrow} alt="Seta pra Direita"/>
                  </div>
                </button>
                <button onClick={() => setContato(true)}>
                  <span>
                    Fale com a gente!
                  </span>
                  <div className="icon">
                    <img src={RightArrow} alt="Seta pra Direita"/>
                  </div>
                </button>
              </div>
            </div>
            <div className="right-side">
              <div className="content-image">
                <img src={DesenvolvimentoWeb} alt="Desenvolvimento Web - Agência Hipnos"/>
              </div>
            </div>
          </div>
          <div className="box-servico">
            <div className="top-line"></div>
            <div className="left-side">
              <div className="top-title">
                <div className="number">
                  02
                </div>
                <h2>
                  Branding & Design
                </h2>
              </div>
              <p>
                O visual é parte importante de seu negócio, e sua identidade. Nossos designers trabalham para que sua marca esteja bem representada e posicionada na 
                web. Uma logomarca criativa e um website impactante, por exemplo, podem ser peças chave na sua estratégia de marketing virtual.
              </p>
              <ul>
                <li>
                  Websites
                </li>
                <li>
                  Motion Design
                </li>
                <li>
                  Branding
                </li>
                <li>
                  Social Media Design
                </li>
              </ul>
              <div className="content-button">
                <button onClick={() => setContato(true)}>
                  <span>
                    Faça um orçamento
                  </span>
                  <div className="icon">
                    <img src={RightArrow} alt="Seta pra Direita"/>
                  </div>
                </button>
                <button onClick={() => setContato(true)}>
                  <span>
                    Fale com a gente!
                  </span>
                  <div className="icon">
                    <img src={RightArrow} alt="Seta pra Direita"/>
                  </div>
                </button>
              </div>
            </div>
            <div className="right-side">
              <div className="content-image">
                <img src={Branding} alt="Desenvolvimento Web - Agência Hipnos"/>
              </div>
            </div>
          </div>
          <div className="box-servico">
            <div className="top-line"></div>
            <div className="left-side">
              <div className="top-title">
                <div className="number">
                  03
                </div>
                <h2>
                  Desenvolvimento Mobile
                </h2>
              </div>
              <p>
                O setor mobile encontra-se entre as áreas de maior expansão no mercado atual. As soluções para este segmento necessitam acompanhar as mudanças de 
                hábito de uso do usuário, que estão cada vez mais conectados em dispositivos móveis. Traga sua empresa para o mundo mobile, a Hipnos pode te ajudar.
              </p>
              <ul>
                <li>
                  Criação de aplicativos
                </li>
                <li>
                  e-Commerce
                </li>
                <li>
                  Sistemas móveis
                </li>
                <li>
                  
                </li>
              </ul>
              <div className="content-button">
                <button onClick={() => setContato(true)}>
                  <span>
                    Faça um orçamento
                  </span>
                  <div className="icon">
                    <img src={RightArrow} alt="Seta pra Direita"/>
                  </div>
                </button>
                <button onClick={() => setContato(true)}>
                  <span>
                    Fale com a gente!
                  </span>
                  <div className="icon">
                    <img src={RightArrow} alt="Seta pra Direita"/>
                  </div>
                </button>
              </div>
            </div>
            <div className="right-side">
              <div className="content-image">
                <img src={DesenvolvimentoMobile} alt="Desenvolvimento Web - Agência Hipnos"/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Servicos