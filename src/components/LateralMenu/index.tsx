import React, { useState, useEffect } from 'react'

import './styles.scss'

import Logo from '../../images/logo.png'
import FirstSection from './FirstSection'
import Menu from './Menu'

interface Props {
  page: number
}

const LateralMenu: React.FC<Props> = ({
  page
}) => {
  
  useEffect(() => {
    console.log(page)
  }, [page])

  const [firstPage, setFirstPage] = useState(false)

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
      <FirstSection active={firstPage} />
      <Menu items={menu} />
    </div>
  )
}

export default LateralMenu