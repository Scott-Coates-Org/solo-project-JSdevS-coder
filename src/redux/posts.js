import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [
			{ id: '1', title: 'help me find peach', body: 'blah blah blah' },
			{ id: '2', title: 'collect all stars', body: 'blah blah blah' },
			{ id: '3', title: 'egg hunt with yoshi', body: 'blah blah blah' },
		],
		loading: false,
		error: false,
	},
	reducers: {
		//actions for adding post
		addPost: (state, action) => {
			state.posts = [...posts, action.payload]
		},
		addPostSuccess: (state, action) => {
			state.isLoaded = true
			state.posts = action.payload
			state.error = false
		},
		addPostFailure: state => {
			state.isLoaded = true
			state.error = true
		},

		//actions for getting all posts
		getPosts: state => {
			state
		},
		getPostsSuccess: (state, action) => {
			state.isLoaded = true
			state.posts = action.payload
		},

		getPostsFailure: state => {
			state.isLoaded = true
			state.error = true
		},
	},
})

export const {
	addPost,
	getPosts,
	getPostsFailure,
	getPostsSuccess,
	addPostFailure,
	addPostSuccess,
} = postsSlice.actions

export default postsSlice.reducer
