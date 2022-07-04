import Layout from 'components/layout'
import React from 'react'
import { useState } from 'react'
import { StyledButton } from 'styles/Button.styled'
import { StyledFlexColumn } from 'styles/FlexColumn.styled'
import { StyledFlexRow } from 'styles/FlexRow.styled'
import { StyledGreenText } from 'styles/TextGreen.styled'
import { StyledForm } from './SignInUp.styles'

export default function SignIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [signedInUser, setSignedInUser] = useState({})

	const handleSubmit = () => {
		setSignedInUser({ email, password })
	}

	return (
		<Layout>
			<StyledFlexColumn margin="6em auto">
				<StyledForm width="100%" onSubmit={handleSubmit}>
					<StyledGreenText>Wellcome back, sign in!</StyledGreenText>
					<StyledFlexColumn width="50%" margin="0 auto">
						<StyledFlexColumn>
							<label>
								<p>Email:</p>

								<input
									type="email"
									onChange={e => setEmail(e.target.value)}></input>
							</label>
						</StyledFlexColumn>
						<StyledFlexColumn>
							{' '}
							<label>
								<p>Password:</p>

								<input
									type="password"
									onChange={e => setPassword(e.target.value)}></input>
							</label>
						</StyledFlexColumn>
						<StyledFlexColumn style={{ alignSelf: 'end' }}>
							<StyledButton margin="0.5em auto">Sign in</StyledButton>
						</StyledFlexColumn>
					</StyledFlexColumn>
				</StyledForm>
			</StyledFlexColumn>
		</Layout>
	)
}
