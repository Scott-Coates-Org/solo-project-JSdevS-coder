import Layout from 'components/layout'
import React from 'react'
import { useState } from 'react'
import { StyledButton } from 'styles/Button.styled'
import { StyledGreenText } from 'styles/TextGreen.styled'
import { StyledForm } from './SignInUp.styles'

export default function SignIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [signedInUser, setSignedInUser] = useState({})

	const handleSubmit = () => {
		setSignedInUser({ email, password })
	}
	console.log(signedInUser)
	return (
		<Layout>
			<StyledForm onSubmit={handleSubmit}>
				<StyledGreenText>Wellcome back, sign in!</StyledGreenText>
				<label>
					<p>Email:</p>

					<input type="email" onChange={e => setEmail(e.target.value)}></input>
				</label>
				<label>
					<p>Password:</p>

					<input
						type="password"
						onChange={e => setPassword(e.target.value)}></input>
				</label>
				<StyledButton>Sign in</StyledButton>
			</StyledForm>
		</Layout>
	)
}
