//Header.js
import React from 'react';
import {Consumer} from './index';
import './App.css'

const Header = props => (
//Consumer exposes its value through props.children
<Consumer>
{value => (
  <div className={`${value.theme}-header`}>
      <h1>Wicked Rad Header</h1>
      <button onClick={value.toggleTheme}>{value.theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
  </div>
)}
</Consumer>
)

export default Header