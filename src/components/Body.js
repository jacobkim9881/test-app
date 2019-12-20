import React from 'react'
import About from './About'
import Portfolio from './Portfolio'
import Home from './Home'
import Donate from './Donate'
import Projects from './Projects'
import WorkSpace from './WorkSpace'
import {Switch,
             Route} from 'react-router-dom'

const Body = () => {
    const main = {
        textAlign: "center"
    }
    return (
        <React.Fragment style={main}>
            <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/portfolio'>
                        <Portfolio />
                    </Route>
                    <Route path='/donate'>
                        <Donate />
                    </Route>
                    <Route path='/projects'>
                        <Projects />
                    </Route>    
                    <Route path='/workspace'>
                        <WorkSpace />                    
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>                        
                </Switch>
        </React.Fragment>
    )
}

export default Body
