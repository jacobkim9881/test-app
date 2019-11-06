import React from 'react'
import movies from './movie.json'

class Portfolio extends React.Component {
    render() {
    const img = {
        padding: "1rem"
    }
    
    return (          
        <div>
            {movies.map(x =>         
            <a href={x.adress}>
            <img style={img} src={x.img} alt={x.name} /></a>        
            )}
        </div>
    )
}
}

export default Portfolio
