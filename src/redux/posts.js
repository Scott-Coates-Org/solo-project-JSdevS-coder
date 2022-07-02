import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		loading: false,
		error: false,
	},
	reducers: {
		addPost: (state, action) => {
			state.posts = [...posts, action.payload]
		},
		getPost: state => {
			state = state
		},
	},
})

export const { addPost, getPost } = postsSlice.actions

export default postsSlice.reducer
