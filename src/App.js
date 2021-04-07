import React, { Component } from 'react'
import Cn from './Cn'


export default class App extends Component {

    state = {
        books:[
            {   
                id:0,
                name:"Python",
                page:250
            },
            {
                id:1,
                name:"javascript",
                page:150
            },
            {
                id:2,
                name:'Django',
                page:300
            },
            {
                id:3,
                name:'React',
                page:150
            }
        ]
    }

    handleclick = (el_id,eventh)=>{

        console.log()
        let newBookList = this.state.books.filter(ele=>{
            return ele.id !== el_id
        })
        this.setState({
            books:newBookList
        })


        

    }
    render() {
        return (
            <div>
              <Cn han={this.handleclick} book={this.state.books} />  
            </div>
        )
    }
}
