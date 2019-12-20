import React, { Component } from 'react'

export class OnOff extends Component {
    constructor() {
        super()
        this.state = { isOn : false}
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState(state => (
            { isOn: !state.isOn }
        ))
    }

    render() {
        return (
            <button onClick={this.handleToggle}>
                { this.state.isOn ? "On" : "Off"}
            </button>
        )
    }
}

export default OnOff
