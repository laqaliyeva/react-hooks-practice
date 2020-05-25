import React from 'react'
import {Link} from 'react-router-dom'

export const Card = () => {

    return (
        <div className="card">
            <img src="" alt="" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">Title</h5>
                <Link to={`/profile/${'name'}`} className="btn btn-primary">Open</Link>
            </div>
        </div>
    )
}