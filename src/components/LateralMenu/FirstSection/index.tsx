import React from 'react'

import './styles.scss'

interface Props {
  active: boolean
}

const FirstSection: React.FC<Props> = ({
  active
}) => {
  return (
    <div className={active ? 'section-lateral-menu first-page active' : 'section-lateral-menu first-page'}>
      <div className="content-title">
        <span>
          Desenvolvimento &#38; Design
        </span>
      </div>
    </div>
  )
}

export default FirstSection