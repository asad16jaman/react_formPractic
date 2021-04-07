import React, { Component } from 'react'
import MainBook from './MainBook'
import Container from 'react-bootstrap/Container'

export default class Cn extends Component {
    render() {
        return (
            <Container>
                    <MainBook mainhan={this.props.han} book={this.props.book}  />
                
            </Container>
            
        )
    }
}
