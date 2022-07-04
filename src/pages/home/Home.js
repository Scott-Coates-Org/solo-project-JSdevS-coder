import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, fetchAllPosts } from 'redux/post'

//components
import Layout from '../../components/layout'
import Hero from '../../components/page-component/Hero'
import PostList from '../../components/page-component/posts/PostList'

//style
import { Container } from 'reactstrap'
import { StyledContainer } from 'styles/Container.styled'

export default function Home(props) {
	console.log(props)
	const dispatch = useDispatch()

	const { data, isLoaded, hasErrors } = useSelector(state => state.post)

	useEffect(() => {
		// dispatch async thunks are promises
		// https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions
		dispatch(createPost({ title: 'my title', type: 'my type' })).then(
			action => {
				dispatch(fetchAllPosts())
			}
		)
	}, [dispatch])
	console.log(data)
	return (
		<StyledContainer>
			<Layout {...props}>
				<Hero />
				<PostList />
				{/* <nav className="d-flex flex-column align-items-center">
				<section>
					{!isLoaded && 'Posts loading…'}
					{hasErrors && 'Error Loading'}
					{isLoaded && (
						<div>
							<p>Posts are Loaded!</p>
							<pre>{JSON.stringify(data, null, 2)}</pre>
						</div>
					)}
				</section>
			</nav> */}
			</Layout>
		</StyledContainer>
	)
}
