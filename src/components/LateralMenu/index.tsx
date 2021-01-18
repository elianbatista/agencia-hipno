import React, { useState } from 'react'

import './styles.scss'

import Logo from '../../images/logo.png'
import FirstSection from './FirstSection'
import Menu from './Menu'

interface Props {
  active: boolean
}

const LateralMenu: React.FC<Props> = ({
  active
}) => {

  const [menu, setMenu] = useState([
    {
      id: 1,
      titulo: 'Home',
      active: true
    },
    {
      id: 2,
      titulo: 'Sobre',
      active: false
    },
    {
      id: 3,
      titulo: 'Serviços',
      active: false
    },
    {
      id: 4,
      titulo: 'Suporte',
      active: false
    },
    {
      id: 5,
      titulo: 'Portfolio',
      active: false
    }
  ])

  function handleMenu(id: number) {
    const newMenu = menu.map(item => {
      return item.id === id ? { ...item, active: true } : { ...item, active: false }
    })
    setMenu(newMenu)
  }

  return (
    <div className="content-lateral-menu">
      <div className="content-logo" onClick={() => handleMenu(2)}>
        <img src={Logo} alt="Logo Agência Hipno"/>
      </div>
      <FirstSection active={!active} />
      <Menu items={menu} active={active} />
    </div>
  )
}

export default LateralMenu