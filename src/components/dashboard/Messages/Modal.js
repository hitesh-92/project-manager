import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {

  state = {
    message: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
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
          className="pulse right btn-floating btn-small waves-effect waves-light green modal-trigger"
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

              {/* <div className="input-field">
                <label htmlFor="title">Message</label>
                <input 
                  type="text" 
                  id="message" 
                  onChange={this.handleChange} 
                  className="blue-grey-text "
                />
              </div> */}

              {/* <div className="input-field"> */}
                <textarea name="" id=""></textarea>
              {/* </div> */}

              <div className="input-field">
                  <button className="btn waves-effect waves-light modal-close green white-text">
                    Send
                  </button>
              </div>

            </form>

          </div>

          {/* <div className="modal-footer"> */}
            {/* <a href="#" className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </a>
            <a href="#" className="modal-close waves-effect waves-green btn-flat">
              Agree
            </a> */}

            {/* <a href="#!" className="modal-close waves-effect waves-green btn-flat green lighten-1 white-text">Send</a> */}

          {/* </div> */}

        </div>
      </section>
    );
  }
}

export default Modal;