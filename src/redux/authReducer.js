import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		auth: {},
		isLoaded: false,
		error: false,
	},
	//reducers
	reducers: {
		// //actions for adding user
		// addUser: (state, action) => {
		// 	state.users = [...users, action.payload]
		// },
		// addUserSuccess: (state, action) => {
		// 	state.isLoaded = true
		// 	state.users = action.payload
		// 	state.error = false
		// },
		// addUserFailure: state => {
		// 	state.isLoaded = true
		// 	state.error = true
		// },
		// //action for getting user
		// getUser: state => {},
		// getUserSuccess: (state, action) => {
		// 	state.isLoaded = true
		// 	state.users = action.payload
		// },
		// getUserFailure: state => {
		// 	state.isLoaded = true
		// 	state.error = true
		// },
	},
})

// //export actions
// export const { addUser, getUser, getUserFailure, getUserSuccess } =
// 	usersSlice.actions
//export reducer
export default authSlice.reducer
