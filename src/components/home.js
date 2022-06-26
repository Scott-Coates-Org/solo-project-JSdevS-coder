import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createWidget, fetchAllWidgets } from 'redux/widget'

//components
import Layout from './layout'
import Hero from './Hero'
import { Container } from 'reactstrap'
import PostList from './PostList'

export default function Home(props) {
	const dispatch = useDispatch()

	const { data, isLoaded, hasErrors } = useSelector(state => state.widget)

	useEffect(() => {
		// dispatch async thunks are promises
		// https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions
		dispatch(createWidget({ title: 'my title', type: 'my type' })).then(
			action => {
				dispatch(fetchAllWidgets())
			}
		)
	}, [dispatch])
	console.log(data)
	return (
		<Container fluid>
			<Hero />
			<PostList />
		</Container>
		// <Layout {...props}>
		// 	{/* <nav className="d-flex flex-column align-items-center">
		// 		<section>
		// 			{!isLoaded && 'Widgets loading…'}
		// 			{hasErrors && 'Error Loading'}
		// 			{isLoaded && (
		// 				<div>
		// 					<p>Widgets are Loaded!</p>
		// 					<pre>{JSON.stringify(data, null, 2)}</pre>
		// 				</div>
		// 			)}
		// 		</section>
		// 	</nav> */}

		// </Layout>
	)
}
