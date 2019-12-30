import React from 'react'
import {
    Link
} from 'react-router-dom'
import styled from 'styled-components'
import { BreakingChangeType } from 'graphql';

export default function Leftbar() {
    const Leftbar = styled.nav`
        position: absolute;
        display: block;
        width: 8rem;
        float: left;
        left: 1rem;
        height: 100%;        
        border-right-width: 1px;
        border-right-style: solid;
    `;
    return (
            <React.Fragment>                
                <Leftbar>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About
                                </Link>
                        </li>
                        <li>
                            <Link to='/portfolio'>Portfolio
                                </Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects
                                </Link>
                        </li>
                        <li>
                            <Link to='/workspace'>Work Space</Link>
                        </li>
                    </ul>
                    </Leftbar>
            </React.Fragment>
    )
}

//<li>
//<Link to='/donate'>Donate</Link>
//</li>