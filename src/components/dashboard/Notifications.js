import React from 'react'
import moment from 'moment'

const Notifications = (props) => {

    const {notifications} = props

    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications collection">
                        {notifications && notifications.map(item => {
                            return(
                                <li key={item.id} className="collection-item">
                                    <span className="blue-text">{item.user}</span>
                                    <span> {item.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(item.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications