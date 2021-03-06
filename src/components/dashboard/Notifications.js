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
                                    
                                    <div>
                                    <span className="blue-text">{item.user}</span>
                                    {/* <span className="grey-text text-lighten-2"> - </span> */}
                                    <span className="grey-text note-date right">
                                        <small>{moment(item.time.toDate()).fromNow()}</small>
                                    </span>
                                    </div>

                                    <span> {item.content}</span>
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