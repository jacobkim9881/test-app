import React from 'react'
import styled from 'styled-components'
import movies from './movie.json'

const Square = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    margin: auto;
`;

const Image = styled.img`
    padding: 1rem;
`;

class Portfolio extends React.Component {
    render() {
    
    return (          
        <Square>
            {movies.map(x =>         
            <a href={x.adress}>
            <Image src={x.img} alt={x.name} /></a>        
            )}
        </Square>
    )
}
}

export default Portfolio
