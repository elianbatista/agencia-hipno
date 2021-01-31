import React from 'react'
import { FaBehance, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

import Logo from '../../images/logo.png'

import './styles.scss'
import './responsive.scss'

const Footer = () => {
  return (
    <footer>
      <div className="content-footer">
        <div className="first-column">
          <div className="content-logo">
            <img src={Logo} alt="Logo Agência Hipno"/>
          </div>
          <div className="content-icons">
            <div className="icon">
              <FaBehance />
            </div>
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
          </div>
          <div className="content-locate">
            <div className="box-icon">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info">
                Espírito Santo, Brasil
              </div>
            </div>
            <div className="box-icon">
              <div className="icon">
                <FaWhatsapp />
              </div>
              <div className="info">
                +55 (28) 9 9291 1244 
              </div>
            </div>
          </div>
        </div>
        <div className="second-column">
          <div className="footer-title">
            Agência
          </div>
          <div className="content-footer-menu">
            <ul>
              <li>
                Serviços
              </li>
              <li>
                Trabalhos
              </li>
              <li>
                Sobre Nós
              </li>
              <li>
                Blog
              </li>
              <li>
                Contato
              </li>
            </ul>
            <ul>
              <li>
                Depoimentos
              </li>
              <li>
                Termos e Condições
              </li>
              <li>
                Política de Privacidade
              </li>
            </ul>
          </div>
        </div>
        <div className="third-column">
        <div className="footer-title">
          Serviços
        </div>
        <div className="content-footer-menu">
          <ul>
            <li>
              Websites
            </li>
            <li>
              Branding
            </li>
            <li>
              Web Design
            </li>
            <li>
              Suporte
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className="bottom-footer">
        <p>
          &copy; { new Date().getFullYear() } Agência Hipno - Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer