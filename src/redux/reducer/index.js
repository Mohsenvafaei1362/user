import { combineReducers } from 'redux'
import { messageReducer } from './productReducer'

const reducers = combineReducers({
    allmessage: messageReducer,
})

export default reducers;