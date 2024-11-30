import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contex/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="dark:bg-slate-900 dark:text-white">
        <AuthProvider>
          <App />
        </AuthProvider>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
