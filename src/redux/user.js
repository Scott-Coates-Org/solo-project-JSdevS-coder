// https://dev.to/thatgalnatalie/how-to-get-started-with-redux-toolkit-41e
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
	data: [
		{
			firstName: '',
			lastName: '',
			username: '',
			email: '',
			password: '',
			location: [],
			city: '',
		},
	],
	isLoaded: false,
	hasErrors: false,
}

const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getData: state => {},

		getDataSuccess: (state, action) => {
			state.isLoaded = true
			state.data = action.payload
		},

		getDataFailure: state => {
			state.isLoaded = true
			state.hasErrors = true
		},
	},
})

export const createUser = createAsyncThunk(
	'user/createUser',
	async (payload, thunkAPI) => {
		try {
			await _createUser(payload.title, payload.type)
		} catch (error) {
			console.error('error', error)
			// Set any erros while trying to fetch
			thunkAPI.dispatch(createDataFailure())
		}
	}
)

async function _createUser(
	firstName,
	lastName,
	username,
	email,
	location,
	city,
	password
) {
	const doc = await firebaseClient.firestore().collection('users').add({
		firstName,
		lastName,
		username,
		email,
		location,
		city,
		password,
	})

	return doc
}

export const reducer = user.reducer

export const { getData, getDataSuccess, getDataFailure } = user.actions
