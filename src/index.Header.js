import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import ThemeProvider from './ThemeProvider'
export const {Consumer, Provider} = React.createContext()

ReactDOM.render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>,
    document.getElementById("root")
  )