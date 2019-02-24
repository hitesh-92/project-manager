import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


import {connect} from 'react-redux'
import {addMessage} from '../../../store/actions/messageActions'


class Modal extends Component {

  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const hasInput = this.state.message.length > 3;
    if(!hasInput) return
    this.props.addMessage(this.state)
  }

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        // console.log("Open Start");
      },
      onOpenEnd: () => {
        // console.log("Open End");
      },
      onCloseStart: () => {
        // console.log("Close Start");
      },
      onCloseEnd: () => {
        // console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {

    return (
      <section>
        <a
          className="right btn-floating btn-small green modal-trigger"
          data-target="modal1"
          href="#!"
        >
        <i className="material-icons">add</i>
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content">

            <form className="" onSubmit={this.handleSubmit}>

              <h5 className="green-text text-darken-3">Post Message</h5>

              <textarea className="modal-text" name="message" id="message" onChange={this.handleChange} placeholder="Keep It Simple Stupid">
              </textarea>

              <div className="input-field">
                <button className="modal-close red white-text btn">Close</button>
                  <button className="btn modal-close green white-text right">
                    Send
                  </button>
              </div>

            </form>
              
          </div>

        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addMessage: (message) => dispatch(addMessage(message))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal)