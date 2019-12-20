import React from 'react'
import movies from './movie.json'

class Portfolio extends React.Component {
    render() {
    const port = {
        display: "flex",
        flexWrap: "wrap",
        width: "1000px",
        margin: "auto"
    }
    const img = {
        padding: "1rem"
    }
    
    return (          
        <div style={port}>
            {movies.map(x =>         
            <a href={x.adress}>
            <img style={img} src={x.img} alt={x.name} /></a>        
            )}
        </div>
    )
}
}

export default Portfolio
