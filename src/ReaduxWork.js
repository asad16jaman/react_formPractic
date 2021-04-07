import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './store/storage'
import RedCompo from './compo/RedCompo'
import Contorl from './compo/contorl'

export default class ReaduxWork extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                 <RedCompo />
                 <Contorl />
                </div>
            </Provider>
            
        )
    }
}
