import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import Reducers from '../reducers/reducers'

const middleWare=applyMiddleware(logger,thunk)

const store=createStore(Reducers,middleWare)
export default store