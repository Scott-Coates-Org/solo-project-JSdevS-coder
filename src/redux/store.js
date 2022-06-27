// https://dev.to/thatgalnatalie/how-to-get-started-with-redux-toolkit-41e
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { reducer as user } from './user'
import { reducer as post } from './post'

const reducer = combineReducers({
	user,
	post,
})

const store = configureStore({
	reducer,
})

export default store
