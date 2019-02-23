import React from 'react'
import Modal from './Modal'

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
                            <Modal />
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