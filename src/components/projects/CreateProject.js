import React, { Component } from 'react'
import {createProject} from '../../store/actions/projectActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let hasInput = this.state.title.length > 1 && this.state.content.length > 1

        if(!hasInput) return;

        this.props.createProject(this.state)
        this.props.history.push('/')
        
    }

    render() {

        const {auth} = this.props
        if (!auth.uid) return <Redirect to="/signin"/>

    return (
    <section id="createProject">
        <div className="container">

            <form className="white" onSubmit={this.handleSubmit}>

                <h5 className="grey-text text-darken-3">Create New Project</h5>

                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">Desciption</label>
                    <textarea id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>

                <div className="input-field">
                    <button className="btn waves-effect waves-light">Create
                        <i className="material-icons right">send</i>
                    </button>
                </div>

            </form>

        </div>
    </section>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
