import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Leftbar from './components/Leftbar'
import Body from './components/Body'
//import {Consumer} from './index'

class App extends React.Component {
    
    render() {
        return (
         <div>
             <Router>
                <Leftbar />
                <Body />
                 <br/><br/><br/>
             </Router>
         </div>         
        )
    }

}

export default App