import Layout from 'components/layout'
import React from 'react'
import { useState } from 'react'
import { StyledButton } from 'styles/Button.styled'
import { StyledGreenText } from 'styles/TextGreen.styled'
import { StyledForm } from './SignInUp.styles'

export default function SignUp() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [username, setUsername] = useState('')
	const [city, setCity] = useState('')
	const [newUser, setNewUser] = useState({})

	const findLocation = () => {
		const location = fetch(
			'https://extreme-ip-lookup.com/json/?key=K1qum4DUa8ayh2q5pjvj'
		)
			.then(res => res.json())
			.then(response => {
				console.log(response)
				return [response.lon, response.lat]
			})
			.catch((data, status) => {
				console.log('Request failed')
			})

		return location
	}

	const handleSubmit = () => {
		setNewUser({
			firstName,
			lastName,
			username,
			email,
			password,
			city,
			location: findLocation(),
		})
	}

	console.log(newUser)
	return (
		<Layout>
			<StyledForm onSubmit={handleSubmit}>
				<StyledGreenText>Wellcome, sign up!</StyledGreenText>
				<label>
					<p>First name:</p>
					<input
						type="text"
						onChange={e => setFirstName(e.target.value)}></input>
				</label>
				<label>
					<p>Last name:</p>
					<input
						type="text"
						onChange={e => setLastName(e.target.value)}></input>
				</label>
				<label>
					<p>Username:</p>
					<input
						type="text"
						onChange={e => setUsername(e.target.value)}></input>
				</label>

				<label>
					<p>Email:</p>
					<input type="email" onChange={e => setEmail(e.target.value)}></input>
				</label>

				<label>
					<p>City:</p>
					<input type="text" onChange={e => setCity(e.target.value)}></input>
				</label>
				<label>
					<p>Password:</p>

					<input
						type="password"
						onChange={e => setPassword(e.target.value)}></input>
				</label>
				<StyledButton type="submit">Sign up</StyledButton>
			</StyledForm>
		</Layout>
	)
}
