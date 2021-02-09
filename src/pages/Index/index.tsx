import React, { useState, useRef, useEffect } from 'react'

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
  const wrapper: any = useRef(null)

  const [menu, setMenu] = useState(false)
  const [menuBlack, setMenuBlack] = useState(false)
  const [scroll, setScroll] = useState(0) // Valor do Scroll no Wrapper
  const [scrollTo, setScrollTo] = useState('') // Nome da section para scrollar
  const [contato, setContato] = useState(false)
  const [positionSobreSection, setPositionSobreSection]: any = useState(null)
  const [positionServicosSection, setPositionServicosSection]: any = useState(null)

  const [itensMenu, setItensMenu] = useState([
    {
      id: 1,
      titulo: 'Home',
      class: 'home',
      active: true,
      link: ''
    },
    {
      id: 2,
      titulo: 'Sobre',
      class: 'sobre',
      active: false,
      link: ''
    },
    {
      id: 3,
      titulo: 'Serviços',
      class: 'servicos',
      active: false,
      link: '/servicos'
    },
    {
      id: 4,
      titulo: 'Portfolio',
      class: 'portfolio',
      active: false,
      link: 'https://www.behance.net/agenciahipnos'
    }
  ])

  useEffect(() => {
    console.log(wrapper.current?.offsetHeight)
    if (wrapper != null) {
      setPositionServicosSection(wrapper.current?.querySelector('section.servicos').getBoundingClientRect())
      setPositionSobreSection(wrapper.current?.querySelector('section.sobre').getBoundingClientRect())
    }
  }, [wrapper])

  useEffect(() => {
    console.log(positionSobreSection)
  }, [positionSobreSection])

  function handleScrollWrapper(event: any) {
    setScroll(event.target.scrollTop)
    scrollSetPage(scroll)
  }

  function handleMenu(id: number) {
    const newMenu = itensMenu.map(item => {
      if (item.id === id) {
        if (item.class === 'home') {
          handleScrollTo(0)
        } else if (item.class === 'sobre') {
          handleScrollTo(wrapper.current?.offsetHeight + positionSobreSection?.y - positionSobreSection?.height)
        }
      }
      return item.id === id ? { ...item, active: true } : { ...item, active: false }
    })
    setItensMenu(newMenu)
  }

  function handleScrollTo(position: number) {
    wrapper.current?.scrollTo(0, position)
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
      <LateralMenu active={menu} black={menuBlack} menu={itensMenu} handleMenu={handleMenu} />
      <div  className={contato ? 'wrapper no-scroll' : 'wrapper'} onScroll={handleScrollWrapper} ref={wrapper}>
        <Topo menu={itensMenu} handleMenu={handleMenu} setContato={setContato} />
        <Banner setContato={setContato} />
        <Container scroll={scroll} scrollTo={scrollTo} />
        <Footer />
      </div>
    </div>
  )
}

export default Index