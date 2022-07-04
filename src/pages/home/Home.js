import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import Layout from '../../components/layout'
import Hero from '../../components/page-component/Hero'
import PostList from '../../components/page-component/posts/PostList'

//style

import { StyledContainer } from 'styles/Container.styled'
import { getPosts } from 'redux/posts'

export default function Home() {
	// const { posts, isLoaded, error } = useSelector(state => state.posts)
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(getPosts())
	// }, [dispatch])
	// console.log(posts)
	return (
		<StyledContainer>
			<Layout>
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
