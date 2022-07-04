import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		loading: false,
		error: false,
	},
	reducers: {
		addUser: (state, action) => {
			state.users = [...users, action.payload]
		},
		getUser: state => {
			state = state
		},
	},
})

export const { addUser, getUser } = usersSlice.actions

export default usersSlice.reducer
