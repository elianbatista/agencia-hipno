import React, { useState } from 'react'

import LateralMenu from '../../components/LateralMenu'
import Topo from '../../components/Topo'
import Banner from '../../components/Banner'
import Container from '../../components/Container'

import './styles.scss'

const Index: React.FC = () => {
  const windowSize = window.innerHeight

  const [menu, setMenu] = useState(false)

  function handleScrollWrapper(event: any) {
    const scrollValue = event.target.scrollTop
    
    scrollSetPage(scrollValue)
  }

  function scrollSetPage(scrollValue: number) {
    console.log(scrollValue)
    if (scrollValue >= 500) {
      setMenu(true)
    } else {
      setMenu(false)
    }
  }

  return (
    <div className="container">
      <LateralMenu active={menu} />
      <div  className="wrapper" onScroll={handleScrollWrapper}>
        <Topo />
        <Banner />
        <Container />
      </div>
    </div>
  )
}

export default Index