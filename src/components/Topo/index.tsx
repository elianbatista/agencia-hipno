import React from 'react'
import { FaBehance, FaFacebookF, FaInstagram } from 'react-icons/fa'

import Logo from '../../images/logo.png'

import './styles.scss'
import './responsive.scss'
import { MenuInterface } from '../../models/menu'

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
              return (
                <li key={item.id} className={item.active ? 'active' : ''} onClick={() => handleMenu(item.id)}>
                  { item.titulo }
                </li>
              )
            })
          }
          <li className="button" onClick={() => setContato(true)}>
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