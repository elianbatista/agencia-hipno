import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './pages/Index';
import Servicos from './pages/Servicos';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path ='/' component={Index} />
      <Route path ='/servicos' component={Servicos} />
    </Router>
  )
}

export default App