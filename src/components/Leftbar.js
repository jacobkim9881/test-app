import React from 'react'
import {
    Link
} from 'react-router-dom'

export default function Leftbar() {
    const naviga = {
        position: "absolute",
        display: "block",
        width: "12rem",
        float: "left",
        height: "100%",
        left: "3rem",
        borderRightWidth: "1px",
        borderRightStyle: "solid"
    }

    const list = {

    }

    return (
            <React.Fragment>
                <nav style={naviga}>
                    <ul>
                        <li style={list}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/portfolio'>Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/donate'>Donate</Link>
                        </li>
                        <li>
                            <Link to='/workspace'>Work Space</Link>
                        </li>
                    </ul>
                </nav>
                
            </React.Fragment>
    )
}