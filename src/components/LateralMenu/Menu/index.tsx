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
            return (
              <li key={item.id} className={item.active ? 'active' : ''} onClick={() => handleMenu(item.id)}>
                { item.titulo }
              </li>
            )
          })
        }
      </ul>
      <div className="content-circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
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
    </div>
  )
}

export default Menu