import React from 'react'
import { FaBehance, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { MenuInterface } from '../../../models/menu'

import './styles.scss'

interface Props {
  menu: MenuInterface[]
  active: boolean
  handleMenu: any
}

export const Menu: React.FC<Props> = ({
  menu,
  active,
  handleMenu
}) => {
  let classMenu = 'section-lateral-content-menu'
  if (active) {
    classMenu += ' active'
  }
  return (
    <div className={classMenu}>
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
      </ul>
      <div className="content-circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
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
    </div>
  )
}

export default Menu