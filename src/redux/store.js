import { createStore } from 'redux'
import {rootReducer} from './reducer/rootReducer'

// const store = createStore(reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer);

export default store;