import React from 'react'
import { FaBehance, FaFacebookF, FaInstagram } from 'react-icons/fa'

import './styles.scss'

const Topo: React.FC = () => {
  return(
    <header>
      <div className="left-side">
        <ul className="menu">
          <li className="active">
            Home
          </li>
          <li>
            Sobre
          </li>
          <li>
            Serviços
          </li>
          <li>
            Suporte
          </li>
          <li>
            Contato
          </li>
          <li>
            Portfolio
          </li>
          <li className="button">
            Fale Conosco
          </li>
        </ul>
      </div>
      <div className="right-side">
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
        <span className="phone">
          +55 (28) 9 9961-4261
        </span>
      </div>
    </header>
  )
}

export default Topo