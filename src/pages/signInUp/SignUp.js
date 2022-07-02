import Layout from 'components/layout'
import React from 'react'
import { useState } from 'react'
import { StyledButton } from 'styles/Button.styled'
import { StyledFlexColumn } from 'styles/FlexColumn.styled'
import { StyledFlexRow } from 'styles/FlexRow.styled'
import { StyledGreenText } from 'styles/TextGreen.styled'
import { StyledForm } from './SignInUp.styles'
import { useAuth } from 'components/user/auth'

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

	const handleGoogleLogin = e => {
		e.preventDefault()
		const googleProvider = new firebase.auth.GoogleAuthProvider()
		return handleLogin(googleProvider)
	}

	const handleFacebookLogin = e => {
		e.preventDefault()
		const facebookProvider = new firebase.auth.FacebookAuthProvider()
		return handleLogin(facebookProvider)
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
			<StyledFlexColumn margin="6em auto">
				<StyledForm width="50%" onSubmit={handleSubmit}>
					<StyledGreenText>Wellcome, sign up!</StyledGreenText>
					<StyledFlexColumn>
						<StyledFlexRow padding="0.5em 0" justify="space-between">
							<StyledFlexColumn>
								<label>
									<p>First name:</p>
									<input
										type="text"
										onChange={e => setFirstName(e.target.value)}></input>
								</label>
							</StyledFlexColumn>
							<StyledFlexColumn>
								{' '}
								<label>
									<p>Last name:</p>
									<input
										type="text"
										onChange={e => setLastName(e.target.value)}></input>
								</label>
							</StyledFlexColumn>
						</StyledFlexRow>
						<StyledFlexRow padding="0.5em 0" justify="space-between">
							<StyledFlexColumn>
								<label>
									<p>Username:</p>
									<input
										type="text"
										onChange={e => setUsername(e.target.value)}></input>
								</label>
							</StyledFlexColumn>
							<StyledFlexColumn>
								<label>
									<p>City:</p>
									<input
										type="text"
										onChange={e => setCity(e.target.value)}></input>
								</label>
							</StyledFlexColumn>
						</StyledFlexRow>

						<StyledFlexColumn>
							<label>
								<p>Email:</p>
								<input
									type="email"
									onChange={e => setEmail(e.target.value)}></input>
							</label>
						</StyledFlexColumn>

						<StyledFlexColumn>
							<label>
								<p>Password:</p>

								<input
									type="password"
									onChange={e => setPassword(e.target.value)}></input>
							</label>
						</StyledFlexColumn>
						<StyledFlexColumn width="50%" margin="0.5em auto">
							<StyledButton type="submit">Sign up</StyledButton>
						</StyledFlexColumn>
					</StyledFlexColumn>
				</StyledForm>
				<StyledButton margin="0.5em auto" onClick={handleGoogleLogin}>
					<FontAwesomeIcon icon={faGoogle} className="mr-lg-1" />
					<p className="m-0 ">Continue with Google</p>
				</StyledButton>
				<StyledButton margin="0.5em auto" onClick={handleFacebookLogin}>
					<FontAwesomeIcon icon={faFacebook} className="mr-lg-1" />
					<p className="m-0 "> Continue with Facebook</p>
				</StyledButton>
			</StyledFlexColumn>
		</Layout>
	)
}
