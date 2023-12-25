import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Landing } from './components/landing.jsx'
import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Landing />
  </React.StrictMode>,
)
