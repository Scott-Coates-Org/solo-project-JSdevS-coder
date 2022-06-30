//style
import { Form, FormGroup, Row, Col, Input, Label, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//hooks
import { useAuth } from './auth'
import { useEffect, useState } from 'react'

//icons
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

//firebase
import { StyledFirebaseAuth } from 'react-firebaseui'

const componentLoginFroms = {
	login: LoginForm,
	email: EmailLogin,
}

export default function Login(props) {
	const { user } = useAuth()

	const [form, setForm] = useState('login')

	const Component = componentLoginFroms[form]

	// if user exists, redirect to home
	useEffect(() => {
		if (user) {
			const returnTo = props.location.state?.appState?.returnTo || '/'

			props.history.replace(returnTo)
		}
	}, [user, props.history])

	const retVal = (
		/* todo - wrap in layout container */
		<div className="container-lg container-fluid mt-lg-0 text-center">
			<div className="row pt-lg-0 ">
				<Row className="container-fluid text-center  ">
					<Col className="mb-6">
						<Component {...props} setForm={setForm} />
					</Col>
				</Row>
			</div>
			{/*
      <style jsx>{`
        h3 {
        }
      `}</style> */}
		</div>
	)

	return retVal
}

function LoginForm(props) {
	const { firebase, setForm } = props

	// right now, the oauth form shows a firebae domain.
	// do not worory, others use magic link as well https://stackoverflow.com/questions/47532134/changing-the-domain-shown-by-google-account-chooser

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

	const handleEmailLogin = e => {
		e.preventDefault()
		setForm('email')
	}

	const terms = (
		<a href="#" target="_blank">
			Terms of Service
		</a>
	)

	const privacy = (
		<a href="#" target="_blank">
			Privacy Policy
		</a>
	)

	const retVal = (
		<Form className="mb-6">
			<Row form className="mx-auto d-flex flex-column align-items-center">
				<Col md={6}>
					<FormGroup className="mb-6">
						{/* for some reason btn-primary does not work? */}
						<Button
							className=" btn-light d-flex flex-row justify-content-center align-items-center mx-auto login-btns"
							onClick={handleGoogleLogin}>
							<FontAwesomeIcon icon={faGoogle} className="mr-lg-1" />
							<p className="m-0 ">Continue with Google</p>
						</Button>
						<Button
							className=" d-flex flex-row justify-content-center align-items-center mx-auto login-btns"
							color="primary"
							onClick={handleFacebookLogin}>
							<FontAwesomeIcon icon={faFacebook} className="mr-lg-1" />
							<p className="m-0 "> Continue with Facebook</p>
						</Button>
						<p className=" text-center font-weight-light my-2">or</p>
						<p className=" text-center text-muted login-btns">
							<a href="#" onClick={handleEmailLogin}>
								Sign in or sign up with email address.
							</a>
						</p>
					</FormGroup>
				</Col>
			</Row>
			<FormGroup>
				<p className=" text-center pt-2 pb-1 text-muted font-weight-light">
					By proceeding, you are agreeing to the {terms} and {privacy}.
				</p>
			</FormGroup>
		</Form>
	)

	return retVal
}

function EmailLogin(props) {
	const { firebase } = props
	console.log(firebase)
	// Configure FirebaseUI.
	const uiConfig = {
		// Popup signin flow rather than redirect flow.
		signInFlow: 'popup',
		// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
		signInSuccessUrl: props.location.state?.appState.returnTo || '/',
		// We will display Google and Facebook as auth providers.
		signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
	}

	return (
		<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
	)
}
