import React, { useState } from 'react'

import LateralMenu from '../../components/LateralMenu'
import Topo from '../../components/Topo'
import Banner from '../../components/Banner'
import Container from '../../components/Container'
import Contato from '../../components/Contato'

import './styles.scss'
import './responsive.scss'

import Footer from '../../components/Footer'

const Index: React.FC = () => {
  const windowSize = window.innerHeight

  const [menu, setMenu] = useState(false)
  const [menuBlack, setMenuBlack] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [contato, setContato] = useState(false)

  function handleScrollWrapper(event: any) {
    setScroll(event.target.scrollTop)
    
    scrollSetPage(scroll)
  }

  function scrollSetPage(scrollValue: number) {
    if (scrollValue >= 500) {
      setMenu(true)
    } else {
      setMenu(false)
    }

    if (scrollValue >= 2800 && scrollValue < 4300) {
      setMenuBlack(true)
    } else {
      setMenuBlack(false)
    }
  }

  return (
    <div className="container">
      <Contato active={contato} />
      <div className={contato ? 'background-gray active' : 'background-gray'} onClick={() => setContato(false)}></div>
      <LateralMenu active={menu} black={menuBlack} />
      <div  className={contato ? 'wrapper no-scroll' : 'wrapper'} onScroll={handleScrollWrapper}>
        <Topo setContato={setContato} />
        <Banner />
        <Container scroll={scroll} />
        <Footer />
      </div>
    </div>
  )
}

export default Index