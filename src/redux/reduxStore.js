import { configureStore } from '@reduxjs/toolkit'
import { render } from 'react-dom'
import authReducer from './authReducer'
import postsReducer from './posts'
import usersReducer from './users'
authReducer

export const reduxStore = configureStore({
	reducer: {
		post: postsReducer,
		user: usersReducer,
		auth: authReducer,
	},
})

reduxStore.subscribe(render)
