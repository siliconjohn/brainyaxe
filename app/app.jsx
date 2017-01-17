import React from 'react'
import ReactDOM from 'react-dom'
import { initialState } from './initialState'
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'store'
import About from 'About'
import Settings from 'Settings'
import AppContainer from 'AppContainer'
import TuningsContainer from 'TuningsContainer'
import ChordsContainer from 'ChordsContainer'
import ScalesContainer from 'ScalesContainer'
import ReactGA from 'react-ga'

require('style!css!sass!applicationStyles')

// initialize google analytics
ReactGA.initialize('UA-87996753-1')

var newStore = createStore( initialState )

ReactDOM.render(
  <Provider store={ newStore }>
    <Router history={ hashHistory }>
       <Route path="/" component={ AppContainer }>
         <Route path="tunings" component={ TuningsContainer }/>
         <Route path="chords" component={ ChordsContainer }/>
         <Route path="scales" component={ ScalesContainer }/>
         <Route path="about" component={ About }/>
         <Route path="settings" component={ Settings }/>
         <IndexRoute component={ TuningsContainer }/>
       </Route>
     </Router>
  </Provider>,
  document.getElementById("app")
)

// listen for route changes and log to anylitics services
browserHistory.listen( location =>  {

  if( window.location.hostname == 'localhost') {
    return
  }

  // send google analytics location
  ReactGA.pageview( window.location.hash )
})
