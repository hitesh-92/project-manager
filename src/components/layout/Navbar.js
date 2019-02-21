import React from 'react'
import {Link} from 'react-router-dom'
import SingedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darkken-1">
            <div className="container">
                <Link to="/" className="brand-logo">Projects</Link>
                <SingedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar