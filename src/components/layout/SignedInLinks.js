import React from 'react'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

import {NavLink} from 'react-router-dom'

const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink className="green-text green lighten-5" to='/create'>New Project</NavLink></li>
            <li><a className="red-text" href="/" onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating teal accent-3">
                {props.profile.initials}
            </NavLink></li>
            
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
