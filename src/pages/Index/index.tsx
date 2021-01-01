import React, { useState } from 'react'
import LateralMenu from '../../components/LateralMenu'

import './styles.scss'

const Index: React.FC = () => {
  const windowSize = window.innerHeight

  const [page, setPage] = useState(1)

  function handleScrollWrapper(event: any) {
    const scrollValue = event.target.scrollTop
    
    scrollSetPage(scrollValue)
  }

  function scrollSetPage(scrollValue: number) {
    if (scrollValue >= windowSize) {
      setPage(2)
    } else {
      setPage(1)
    }
  }

  return (
    <div className="container">
      <LateralMenu page={page} />
      <div  className="wrapper" onScroll={handleScrollWrapper}>
        
      </div>
    </div>
  )
}

export default Index