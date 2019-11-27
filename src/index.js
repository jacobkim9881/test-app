import React from 'react'
import ReactDOM from 'react-dom'
//import Fetching from './Fetching'
import './index.css'
import App from './App'
//import ThemeGiver from './ThemeGiver'
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});

//export const {Consumer, Provider} = React.createContext()

ReactDOM.render(<App />, document.getElementById("root"))

//<ThemeGiver>
//<App />    
//</ThemeGiver> 