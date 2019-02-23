import React from 'react'
import AddMessage from './AddMessage'

const Messages = (props) => {
    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">

                    <div className="row">
                        <div className="col s6">
                            <span className="card-title">Messages</span>
                        </div>

                        <div className="col s6">
                            {/* <button className="right btn-floating btn-small waves-effect waves-light green"
                                onClick={handleClick}
                            >
                                <i className="material-icons">add</i>
                            </button> */}
                            <AddMessage />
                        </div>
                    </div>
                    <div>
                        <ul className="collection">
                            <li className="collection-item">1</li>
                            <li className="collection-item">1</li>
                            <li className="collection-item">1</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Messages