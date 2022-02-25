import React from 'react'

import theme from '@/theme'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Front from '@/components/templates/frontend'

const GlobalStyle = createGlobalStyle`${theme}`

export const TemplateFront: React.FC = ({ children }) => {
  return (
    <Front>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Front>
  )
}
