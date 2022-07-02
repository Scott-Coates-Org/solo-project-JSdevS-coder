import Layout from 'components/layout'
import { useAuth } from 'components/user/auth'
import React from 'react'
import { useState } from 'react'
import { StyledButton } from 'styles/Button.styled'
import { StyledFlexColumn } from 'styles/FlexColumn.styled'
import { StyledFlexRow } from 'styles/FlexRow.styled'
import { StyledGreenText } from 'styles/TextGreen.styled'
import { StyledForm } from './SignInUp.styles'

import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

// // Configure FirebaseUI.
// const uiConfig = {
// 	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
// 	signInSuccessUrl: props.location.state?.appState.returnTo || '/',
// 	// We will display Google and Facebook as auth providers.
// 	signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
// }

export default function SignIn(props) {
	const { user } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [signedInUser, setSignedInUser] = useState({})

	// if user exists, redirect to home
	useEffect(() => {
		if (user) {
			const returnTo = props.location.state?.appState?.returnTo || '/'

			props.history.replace(returnTo)
		}
	}, [user, props.history])

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

	return (
		<Layout>
			<StyledFlexColumn margin="6em auto">
				<StyledForm width="100%" onSubmit={handleEmailLogin}>
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
							<StyledButton margin="0.5em auto" type="submit">
								Sign in
							</StyledButton>
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

const handleLogin = provider => {
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then(result => {
			var credential = result.credential

			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = credential.accessToken
			// The signed-in user info.
			var user = result.user
			// ...
		})
		.catch(error => {
			// Handle Errors here.
			var errorCode = error.code
			var errorMessage = error.message
			// The email of the user's account used.
			var email = error.email
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential
			console.error(error)
			alert(error)
			// ...
		})
}
