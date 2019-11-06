import React from 'react'

class ThemeGiver extends React.Component{
    constructor() {
        super()
        this.state = {
            theme: "dark"
        }        
        this.toggleTheme = this.toggleTheme.bind(this)
    }

    toggleTheme(){
        this.setState(prevState => ({
            theme: prevState.theme === "dark" ? "light" : "dark"
        }))
    }

    render(){
        const props ={
            toggleTheme: this.toggleTheme,
            ...this.state
        }
        return (
            <provider value={props}>
                {this.props.children}
            </provider>
        )
    }
}

export default ThemeGiver