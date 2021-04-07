import React from 'react'

import { connect } from 'react-redux'

function RedCompo(props) {
    return (
        <div>
            hellow it is func componene , {props.count}
        </div>
    )
}

function mapStateToProps(state){
    return {
        count:state.count
    }
}

export default connect(mapStateToProps)(RedCompo)
