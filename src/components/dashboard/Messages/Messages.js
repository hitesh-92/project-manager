import React from 'react'
import Modal from './Modal'
import moment from 'moment'

const Messages = (props) => {

    const {messages} = props

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
                            {messages && messages.map(item => {
                                return(
                                    <li 
                                        key={item.id}
                                        className="collection-item"
                                    >
                                    <span className="blue-text text-darken-4">{item.message}</span>
                                    <div>
                                    <small className="grey-text">
                                        {item.authorFirstName[0]}. {item.authorLastName}
                                    </small>
                                    <span className="grey-text text-lighten-2"> - </span>
                                    <span className="grey-text">
                                        <small>{moment(item.createdAt.toDate()).fromNow()}</small>
                                    </span>
                                    </div>
                                        
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages