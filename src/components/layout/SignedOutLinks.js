import React from 'react'

import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className="right">
            <li><NavLink className="green lighten-2" to='/signup'>Sign Up</NavLink></li>
            <li><NavLink className="blue lighten-2" to='/signin'>Log In</NavLink></li>        
        </ul>
    )
}

export default SignedOutLinks