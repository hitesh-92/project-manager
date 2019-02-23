import React, {Component} from 'react'
import Modal from './Modal'

class AddMessage extends Component{
    
    state = {
        message: ''
    }
 
    handleClick = (e) => {

    }


    render(){
        
        return(

            <section>
                {/* <button 
                    className="pulse right btn-floating btn-small waves-effect waves-light green"
                    onClick={this.handleClick}
                >
                <i className="material-icons">add</i>
                </button> */}
                <Modal />
            </section>

        )

    }

}



export default AddMessage