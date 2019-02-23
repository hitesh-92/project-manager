import React, {Component} from 'react'

class AddMessage extends Component{
    
    state = {
        message: ''
    }
 
    


    render(){
        
        return(

            <section>
                <button 
                    className="right btn-floating btn-small waves-effect waves-light green"
                    onClick={this.handleClick}
                >
                <i className="material-icons">add</i>
                </button>
                          
            </section>

        )

    }

}



export default AddMessage