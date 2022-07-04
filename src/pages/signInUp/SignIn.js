import React from 'react'
import { useState } from 'react'

//firebase
import {
	auth,
	signInWithGooglePopup,
	createUserDocfromAuth,
} from '../../firebase/firebase.util'

//styles
import { StyledButton } from 'styles/Button.styled'
import { StyledFlexColumn } from 'styles/FlexColumn.styled'
import { StyledGreenText } from 'styles/TextGreen.styled'
import { StyledForm } from './SignInUp.styles'

//components
import Layout from 'components/layout'

export default function SignIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup()
		const userDocRef = await createUserDocfromAuth(user)
	}

	return (
		<Layout>
			<StyledFlexColumn margin="6em auto">
				<StyledForm width="100%" onSubmit={handleEmailSignIn}>
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
							<label>
								<p>Password:</p>

								<input
									type="password"
									onChange={e => setPassword(e.target.value)}></input>
							</label>
						</StyledFlexColumn>
						<StyledFlexColumn style={{ alignSelf: 'end' }}>
							<StyledButton margin="0.5em auto" type="submit">
								Sign in
							</StyledButton>
						</StyledFlexColumn>
					</StyledFlexColumn>
				</StyledForm>
				<StyledButton margin="0.5em auto" onClick={logGoogleUser}>
					Sign in with Google
				</StyledButton>
			</StyledFlexColumn>
		</Layout>
	)
}
