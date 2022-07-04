// https://dev.to/thatgalnatalie/how-to-get-started-with-redux-toolkit-41e
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firebaseClient from '../firebase/client'

const initialState = {
	posts: [],
	isLoaded: false,
	hasErrors: false,
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts: state => {},

		getPostsSuccess: (state, action) => {
			state.isLoaded = true
			state.posts = action.payload
		},

		getPostsFailure: (state, action) => {
			state.isLoaded = true
			state.hasErrors = true
		},

		createPostsFailure: state => {
			state.hasErrors = true
		},
		createPost: (state, action) => {
			state.hasErrors = false
			state.isLoaded = true
		},
	},
})

export const { getData, getDataSuccess, getDataFailure, createDataFailure } =
	postsSlice

export const reducer = postsSlice.reducer

export const fetchAllPosts = createAsyncThunk(
	'posts/fetchAllPosts',
	async (_, thunkAPI) => {
		// Set the loading state to true
		thunkAPI.dispatch(getPosts())

		try {
			const data = await _fetchAllPostsFromDb()
			thunkAPI.dispatch(getDataSuccess(data))
		} catch (error) {
			console.error('error', error)
			// Set any erros while trying to fetch
			thunkAPI.dispatch(getDataFailure(error))
		}
	}
)

export const createPost = createAsyncThunk(
	'post/createPost',
	async (payload, thunkAPI) => {
		try {
			await _createPost(payload.title, payload.type)
		} catch (error) {
			console.error('error', error)
			// Set any erros while trying to fetch
			thunkAPI.dispatch(createDataFailure())
		}
	}
)

async function _fetchAllPostsFromDb() {
	const snapshot = await firebaseClient.firestore().collection('posts').get()

	const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.posts() }))

	return posts
}

async function _createPost(
	author,
	body,
	city,
	country,
	currentWeather,
	images,
	location,
	monthlyWeather,
	time,
	title
) {
	const doc = await firebaseClient.firestore().collection('posts').add({
		author,
		body,
		city,
		country,
		currentWeather,
		images,
		location,
		monthlyWeather,
		time,
		title,
	})

	return doc
}

// https://stackoverflow.com/a/31205878/173957
function _appendToFilename(filename, string) {
	var dotIndex = filename.lastIndexOf('.')
	if (dotIndex == -1) return filename + string
	else
		return (
			filename.substring(0, dotIndex) + string + filename.substring(dotIndex)
		)
}

function _updloadFile(fileName, file) {
	const uploadTask = firebaseClient.storage().ref(`/${fileName}`).put(file)

	return uploadTask
}
