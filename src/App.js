import { Switch, Route, Redirect } from "react-router"
import { BrowserRouter as Router } from 'react-router-dom'

import { TestStart } from './components/testStart'
import { TestLayout } from './components/testLayout'
import { TestResult } from './components/testResult'

import './App.scss'

function App() {

  return (
    <div className="App">
      <h1>Typing Test</h1>
      <Router>
        <Switch>
          <Route exact path='/home'><TestStart /></Route>
          <Route exact path='/test'><TestLayout /></Route>
          <Route exact path='/result'><TestResult /></Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
