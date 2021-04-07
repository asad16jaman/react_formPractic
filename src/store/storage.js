import { createStore } from 'redux'
import RootReducers from './reducers/rootreducers'

const store = createStore(RootReducers)

export default store