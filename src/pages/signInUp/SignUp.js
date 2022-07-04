import React from 'react'
import { useState } from 'react'

//firebase
import {
	createUserWithEmail,
	createUserDocfromAuth,
} from 'firebase/firebase.util'

//styles
import { StyledButton } from 'styles/Button.styled'
import { StyledFlexColumn } from 'styles/FlexColumn.styled'
import { StyledFlexRow } from 'styles/FlexRow.styled'
import { StyledGreenText } from 'styles/TextGreen.styled'
import { StyledForm } from './SignInUp.styles'

//components
import Layout from 'components/layout'

export default function SignUp() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmedPassword, setConfirmedPassword] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [username, setUsername] = useState('')
	const [city, setCity] = useState('')
	const [newUser, setNewUser] = useState({})

	const resetForm = () => {
		setEmail('')
		setFirstName('')
		setLastName('')
		setCity('')
		setUsername('')
		setPassword('')
		setConfirmedPassword('')
		setNewUser({})
	}
	const handleSubmit = e => {
		e.preventDefault()
		setNewUser({ firstName, lastName, username, email, city, password })

		return async e => {
			if (password !== confirmedPassword) {
				alert('Passwords do not match')
				return
			}

			try {
				const { user } = await createUserWithEmail(email, password)

				await createUserDocfromAuth(user, newUser)
			} catch (err) {
				if (err.code === 'auth/email-already-in-use') {
					alert('Can not create user, email already in use')
				}
				console.log(err)
			}
			resetForm()
		}
	}

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
										onChange={e => setFirstName(e.target.value)}
										required
										value={firstName}></input>
								</label>
							</StyledFlexColumn>
							<StyledFlexColumn>
								<label>
									<p>Last name:</p>
									<input
										type="text"
										onChange={e => setLastName(e.target.value)}
										required
										value={lastName}></input>
								</label>
							</StyledFlexColumn>
						</StyledFlexRow>
						<StyledFlexRow padding="0.5em 0" justify="space-between">
							<StyledFlexColumn>
								<label>
									<p>Username:</p>
									<input
										type="text"
										onChange={e => setUsername(e.target.value)}
										required
										value={username}></input>
								</label>
							</StyledFlexColumn>
							<StyledFlexColumn>
								<label>
									<p>City:</p>
									<input
										type="text"
										onChange={e => setCity(e.target.value)}
										required
										value={city}></input>
								</label>
							</StyledFlexColumn>
						</StyledFlexRow>

						<StyledFlexColumn>
							<label>
								<p>Email:</p>
								<input
									type="email"
									onChange={e => setEmail(e.target.value)}
									required
									value={email}></input>
							</label>
						</StyledFlexColumn>

						<StyledFlexColumn>
							<label>
								<p>Password:</p>

								<input
									type="password"
									onChange={e => setPassword(e.target.value)}
									required
									value={password}></input>
							</label>
						</StyledFlexColumn>
						<StyledFlexColumn>
							<label>
								<p>Confirm password:</p>

								<input
									type="password"
									onChange={e => setConfirmedPassword(e.target.value)}
									required
									value={confirmedPassword}></input>
							</label>
						</StyledFlexColumn>
						<StyledFlexColumn width="50%" margin="0.5em auto">
							<StyledButton type="submit">Sign up</StyledButton>
						</StyledFlexColumn>
					</StyledFlexColumn>
				</StyledForm>
			</StyledFlexColumn>
		</Layout>
	)
}
