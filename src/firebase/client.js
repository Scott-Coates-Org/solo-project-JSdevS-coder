// import fb doens't work easily with mjs
// https://stackoverflow.com/questions/42090156/firebase-initializeapp-is-not-a-function
// https://github.com/nodejs/node/issues/33410
import { firebase } from '@firebase/app'
// These imports load individual services into the firebase namespace. e.g. import 'firebase/auth';
import '@firebase/auth'
import '@firebase/storage'
import 'firebase/firestore'

const firebaseKey = process.env.REACT_APP_FIREBASE_API_KEY
const firebaseProjectId = process.env.REACT_APP_FIREBASE_PROJECT_ID
const firebaseAuthDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
const firebaseStorageBucket = firebaseProjectId + '.appspot.com'
const firebaseRealtimeDatabase =
	'https://travelapp-58af2-default-rtdb.europe-west1.firebasedatabase.app/'

const options = {
	apiKey: firebaseKey,
	authDomain: firebaseAuthDomain,
	projectId: firebaseProjectId,
	storageBucket: firebaseStorageBucket,
	databaseURL: firebaseRealtimeDatabase,
}

const client = firebase.initializeApp(options)

export default client
export const auth = firebase.auth()
export const db = firebase.firestore().settings({ timestampsInSnapshots: true })

export { firebase }
