import React from 'react'
import { FaBehance, FaFacebookF, FaInstagram } from 'react-icons/fa'

import './styles.scss'

interface Props {
  items: ItemInterface[]
}

interface ItemInterface {
  id: number
  titulo: string
  active: boolean
}

export const Menu: React.FC<Props> = ({
  items
}) => {
  return (
    <div className="section-lateral-content-menu">
      <ul className="menu">
        {
          items.map(item => {
            return (
              <li key={item.id} className={item.active ? 'active' : ''}>
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