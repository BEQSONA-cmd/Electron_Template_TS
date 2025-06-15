import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Hello from './Hello/page'
import App from './page'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </Router>
  </React.StrictMode>
)