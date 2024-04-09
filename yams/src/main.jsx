import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProvideStatsContext from './utils/statsContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ProvideStatsContext>
    <App />
    </ProvideStatsContext>
    </BrowserRouter>
  </React.StrictMode>,
)
