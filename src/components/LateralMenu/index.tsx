import React, { useState } from 'react'
import { FaCaretRight } from 'react-icons/fa'

import './styles.scss'
import './responsive.scss'

import Logo from '../../images/logo.png'
import LogoBranca from '../../images/logo-branca.png'
import FirstSection from './FirstSection'
import Menu from './Menu'
import { MenuInterface } from '../../models/menu'
interface Props {
  active: boolean
  black: boolean
  menu: MenuInterface[]
  handleMenu: any
}

const LateralMenu: React.FC<Props> = ({
  active,
  black,
  menu,
  handleMenu
}) => {
  const [mobileActive, SetMobileActive] = useState(false)

  let lateralMenuClass = 'content-lateral-menu'

  if (black) {
    lateralMenuClass += ' black'
  }

  if (mobileActive) {
    lateralMenuClass += ' mobile-active'
  }

  return (
    <div className={lateralMenuClass}>
      <div className="hamburguer" onClick={() => SetMobileActive(!mobileActive)}>
        <FaCaretRight />
      </div>
      <div className="content-logo" onClick={() => handleMenu(2)}>
        <a href="/">
          <img src={Logo} className="normal-logo" alt="Logo Agência Hipno"/>
          <img src={LogoBranca} className="logo-branca" alt="Logo Branca Agência Hipno"/>
        </a>
      </div>
      <FirstSection active={!active} />
      <Menu menu={menu} active={active} handleMenu={handleMenu} />
    </div>
  )
}

export default LateralMenu