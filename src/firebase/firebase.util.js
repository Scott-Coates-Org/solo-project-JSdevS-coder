// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
	getAuth,
	signInWithRedirect,
	GoogleAuthProvider,
	signInWithPopup,
	EmailAuthProvider,
	createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDnDr9cF2rD6Qlmj3-rdTMmth25tJt8zBg',
	authDomain: 'travelapp-58af2.firebaseapp.com',
	databaseURL:
		'https://travelapp-58af2-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'travelapp-58af2',
	storageBucket: 'travelapp-58af2.appspot.com',
	messagingSenderId: '889631858982',
	appId: '1:889631858982:web:c70d969f0c3b5cbd52e1e7',
	measurementId: 'G-02R6HXL741',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

//creating users with google
export const createUserDocfromAuth = async (userAuth, additionalInfo = {}) => {
	const userDocRef = doc(db, 'users', userAuth.uid)

	const userSnapshot = await getDoc(userDocRef)
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			})
		} catch (error) {
			console.log(error.message)
		}
	}
	return userDocRef
}

//creating user with email
const emailProvider = new EmailAuthProvider()
export const signInWithEmailRedirect = () =>
	signInWithRedirect(auth, emailProvider)

export const createUserWithEmail = async (email, password) => {
	if (!email || !password) return

	return await createUserWithEmailAndPassword(auth, email, password)
}
