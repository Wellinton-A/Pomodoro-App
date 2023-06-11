import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

import './style/global.css'
import SelectedProvider from './context/select.contecxt'
import ModalProvider from './context/modal.context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ModalProvider>
      <SelectedProvider>
        <App />
      </SelectedProvider>
    </ModalProvider>
  </React.StrictMode>
)

reportWebVitals()
