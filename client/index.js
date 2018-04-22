import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import {startApp} from './metamask'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)

window.addEventListener('load', function() {

  // Check if Web3 has been injected by the browser:
  if (typeof web3 !== 'undefined') {
    // You have a web3 browser! Continue below!
    startApp(web3);
  } else {
     // Warn the user that they need to get a web3 browser
     // Or install MetaMask, maybe with a nice graphic.
  }

})
