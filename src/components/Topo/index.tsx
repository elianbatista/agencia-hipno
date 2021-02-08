import React from 'react'
import { FaBehance, FaFacebookF, FaInstagram } from 'react-icons/fa'

import Logo from '../../images/logo.png'

import './styles.scss'
import './responsive.scss'
import { MenuInterface } from '../../models/menu'
import { link } from 'fs'

interface Props {
  menu: MenuInterface[]
  handleMenu: any
  setContato: any
}

const Topo: React.FC<Props> = ({
  menu,
  handleMenu,
  setContato
}) => {
  return(
    <header>
      <div className="left-side">
        <div className="content-logo">
          <a href="/">
            <img src={Logo} alt="Logo Agência Hipno"/>
          </a>
        </div>
        <ul className="menu">
          {
            menu.map(item => {
              if (item.link !== '') {
                return (
                  <a href={item.link} target={item.id === 4 ? '_blank' : ''}>
                    <li key={item.id} className={item.active ? 'active' : ''}>
                      { item.titulo }
                    </li>
                  </a>
                )
              } else {
                return (
                  <li key={item.id} className={item.active ? 'active' : ''} onClick={() => handleMenu(item.id)}>
                    { item.titulo }
                  </li>
                )
              }
            })
          }
          <li className="button" onClick={() => setContato(true)}>
            Fale Conosco
          </li>
        </ul>
      </div>
      <div className="right-side">
        <div className="content-icons">
          <a href="https://www.behance.net/agenciahipnos" target="_blank">
            <div className="icon">
              <FaBehance />
            </div>
          </a>
          <div className="icon">
            <FaFacebookF />
          </div>
          <a href="https://www.instagram.com/agenciahipnos/" target="_blank">
            <div className="icon">
              <FaInstagram />
            </div>
          </a>
        </div>
        <span className="phone">
          +55 (28) 9 9961-4261
        </span>
      </div>
    </header>
  )
}

export default Topo