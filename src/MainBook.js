import React, { Component } from 'react'
import LiCs from './LiCs'

export default class MainBook extends Component {
    render() {
        let p = this.props.book.map(myel=>{
            return (
               <LiCs key={myel.id} mainhan={this.props.mainhan} ob={myel} />
            )
        })
        return (
            <ul>
                {p}
            </ul>
        )
    }
}
