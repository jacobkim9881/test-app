import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Leftbar from './components/Leftbar'
import Body from './components/Body'
//import {Consumer} from './index'

import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

const client = new ApolloClient({
    uri: "/.netlify/functions/graphql"
  });

class App extends React.Component {
    constructor() {
      super()
      this.state = { loading: false, msg: null}
    }  


    render() {
        return (
         <React.Fragment>
             <ApolloProvider client={client}>
             <Router>
                <Leftbar />
                <Body />
                 <br/><br/><br/>
             </Router>
                 
             </ApolloProvider>         
         </React.Fragment>         
        )
    }

}

export default App