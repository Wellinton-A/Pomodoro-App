import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

import './style/global.css'
import SelectedProvider from './context/select.contecxt'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <SelectedProvider>
      <App />
    </SelectedProvider>
  </React.StrictMode>
)

reportWebVitals()
