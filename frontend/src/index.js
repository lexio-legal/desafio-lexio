import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
)
