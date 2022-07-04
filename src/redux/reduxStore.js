import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './posts'
import usersReducer from './users'

export default configureStore({
	reducer: {
		post: postsReducer,
		user: usersReducer,
	},
})
