import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import ProvidePostContext from './utils/postContext.jsx'
import ProvideNewsContext from './utils/newsContext.jsx'
import ProvideVideoContext from './utils/videoContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <ProvidePostContext>
    <ProvideNewsContext>
    <ProvideVideoContext>
        <App />
    </ProvideVideoContext>
    </ProvideNewsContext>
    </ProvidePostContext>
    </Router>
  </React.StrictMode>,
)
