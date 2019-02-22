import React, { Component } from 'react'

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

        console.log(this.state)
    }

    render() {
    return (
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
                <button className="btn green lighten-1">
                    Create
                </button>
            </div>

          </form>
      </div>
    )
  }
}

export default CreateProject
