import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'


class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render() {

        const {authError, auth} = this.props
        if (auth.uid) return <Redirect to="/"/>

    return (
    <section id="signIn">

        <div className="row">

            <div className="col s12 m7">

                <div className="signIn-body signIn-desc">
                    <h4 className="center blue-grey-text">
                        Project Management
                    </h4>
                    <br/>

                    <p className="white-text text-darken-1 signIn-body-text">
                        A goal without a plan is just a dream
                    <br/>
                        So layout your steps to success
                    <br/>
                        No matter how big or small
                    <br/>
                        <span className="blue-grey-text">Project Management</span>
                    </p>

                    <p className="grey-text text-lighten-4">
                        <li>Save time with a central HQ</li>
                        <li>Bring your team together</li>
                        <li>Keep on track</li>
                        <li>Reach your goals</li>                        
                    </p>
                </div>

            </div>

            <div className="col s12 m5">

            <div className="">
                <form className="white" onSubmit={this.handleSubmit}>

                    <div className="row">
                        <div className="col s6">
                            <h5 className="left blue-text text-darken-2">Sign In</h5>
                        </div>
                        <div className="col s6">
                            <p className="right">
                                <a href="#!">Sign Up Here</a>
                            </p>
                        </div>
                    </div>

                    <div>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email" >Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-field center">
                        <button className="btn green">
                            Sign In
                        </button>
                    </div>

                    <div className="red-text">
                        {authError ? <p><strong>Please ensure you email and password are correct</strong></p> : null}
                    </div>

                </form>
            </div>

            </div>

        </div>



        {/* <div className="container">
            <form className="white" onSubmit={this.handleSubmit}>

                <h5 className="grey-text text-darken-3">Sign In</h5>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </div>

                <div className="input-field center">
                    <button className="btn green">
                        Log In
                    </button>
                </div>

                <div className="red-text">
                    {authError ? <p>auth Error</p> : null}
                </div>

            </form>


        </div> */}


      </section>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

