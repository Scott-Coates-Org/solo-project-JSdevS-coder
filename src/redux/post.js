// https://dev.to/thatgalnatalie/how-to-get-started-with-redux-toolkit-41e
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firebaseClient from '../firebase/client'

const initialState = {
	data: {},
	isLoaded: false,
	hasErrors: false,
}

const posts = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getData: state => {},

		getDataSuccess: (state, action) => {
			state.isLoaded = true
			state.data = action.payload
		},

		getDataFailure: (state, action) => {
			state.isLoaded = true
			state.hasErrors = true
		},

		createDataFailure: state => {
			state.hasErrors = true
		},
	},
})

export const reducer = posts.reducer

export const { getData, getDataSuccess, getDataFailure, createDataFailure } =
	posts.actions

export const fetchAllPosts = createAsyncThunk(
	'posts/fetchAllPosts',
	async (_, thunkAPI) => {
		// Set the loading state to true
		thunkAPI.dispatch(getData())

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

	const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

	return data
}

async function _createPost(title, type, photo) {
	const doc = await firebaseClient
		.firestore()
		.collection('posts')
		.add({ title, type, photo })

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
