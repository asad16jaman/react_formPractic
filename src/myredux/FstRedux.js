import React, { Component } from 'react'
import {createStore} from 'redux'


export default class FstRedux extends Component {
    render() {

        const reducer = (state={},action)=>{

            if(action.type === 'A'){
                return{
                    name:'i am asad'
                }
            }else if (action.type == 'something'){
                return{
                    ...state,
                    l:'my name is something'
                }
            }
            return state
        }

        const store = createStore(reducer)

        store.subscribe(()=>{
            console.log(store.getState())
            console.log('----------------first subscriber-----------------------')
        })
        store.subscribe(()=>{
            console.log(store.getState())
            console.log('----------------second subscriber-----------------------')
        })
        store.subscribe(()=>{
            console.log(store.getState())
            console.log('----------------third subscriber-----------------------')
        })
      

        store.dispatch({type:'A'})

        store.dispatch({type:'something'})

        store.dispatch({type:'something'})

        store.dispatch({type:'something'})





        return (
            <div>
                hellow world
            </div>
        )
    }
}
