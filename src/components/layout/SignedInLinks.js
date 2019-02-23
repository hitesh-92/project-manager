import React from 'react'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

import {NavLink} from 'react-router-dom'

const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink className="green" to='/create'>New Project</NavLink></li>
            <li><a className="red lighten-3" href="/" onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating green lighten-3">
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
