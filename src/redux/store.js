import {createStore,applyMiddleware} from "redux"
import appReducers from "./reducers/appReducer"
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(appReducers, composedEnhancer)

export default store