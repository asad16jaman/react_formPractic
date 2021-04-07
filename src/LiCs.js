import React, { Component } from 'react'

export default class LiCs extends Component {
    render() {

        return (
            <li className='list-group-item'>{this.props.ob.name}
            <button className='btn btn-danger btn-sm mb-2 float-right' onClick={()=>{
                console.log(this)
                return this.props.mainhan(this.props.ob.id)

            }}>Delete</button>
            </li>
        )
    }
}
