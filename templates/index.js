module.exports = `import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Provider styore={store}>
      <App />
    </Provider>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
`
