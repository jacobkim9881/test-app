import React from 'react';
import './App.css';

class Fetching extends React.Component {
    
    constructor() {
        super()
        this.state = {
            character: {}
        }
    }

    componentDidMount() {
        const API = "https://swapi.co/api/";
        const People1 = "people/1"
        this.setState({loading: true})
        fetch(API + People1)
            .then(response => response.json())
            .then(data => {
                this.setState({                   
                    character: data
                })
            })    
    }

    render() {
        return (
            <div>
                {this.state.character.name}<br />
                {this.state.character.height}<br />
                {this.state.character.hair_color}<br />
                {this.state.character.gender}<br />
                {this.state.character.eye_color}<br />
            </div>
        )
    }
}

export default Fetching;
