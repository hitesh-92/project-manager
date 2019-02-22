import React from 'react'
import {Link} from 'react-router-dom'
import SingedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'


const Navbar = (props) => {

    const {auth, profile} = props

    const links = auth.uid ? <SingedInLinks profile={profile} /> : <SignedOutLinks />

    return(
        <nav className="nav-wrapper grey darkken-1">
            <div className="container">
                <Link to="/" className="brand-logo">Projects</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)