import { combineReducers } from 'redux'
import blogState from './blogs'
import productState from './products'
import auth from './auth'
export const reducers = combineReducers({
    blogState, productState, auth
})