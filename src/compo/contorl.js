import React from 'react'
import { connect} from 'react-redux'

function Contorl(props) {
    return (
        <div>
            <button onClick={()=>{
                console.log('it is from + button handle')
                return props.add()
            }}>+</button>
            <button onClick={()=>props.sub()}>-</button>
        </div>
    )
}

function mapDispatchToprops(dispatchLLLL){
    return{
        add:()=>{
            console.log('it is from react-redax connector ')
            return dispatchLLLL({type:'ADD'})
        },
        sub:()=>{
            return dispatchLLLL({type:'SUB'})
        }
    }
}


export default connect(null,mapDispatchToprops)(Contorl)
