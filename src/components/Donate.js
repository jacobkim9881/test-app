import React from 'react'
import me from './me1.jpg'

const Donate = () => {

    const myImg = {        
        width: "10rem",
        height: "10rem",        
        borderRadius: "50%"

    }

    return (
        <React.Fragment>
            <br />
            <img style={myImg} src={me} alt="my photo"/>
            <br />
            <a href="https://www.paypal.me/jacobkim9881">Thank you for your donation!</a>            
        </React.Fragment>
    )
}

export default Donate
