// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { fetchAllPosts } from 'redux/post'
// import { getPost } from 'redux/posts'
// import store from 'redux/store'
import { StyledContainer } from 'styles/Container.styled'
import { StyledFlexColumn } from 'styles/FlexColumn.styled'
import { StyledFlexRow } from 'styles/FlexRow.styled'
import { StyledGreenText } from 'styles/TextGreen.styled'
import PostSummary from './PostSummary'

export default function PostList() {
	// const { posts } = useSelector(state => state.post)

	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(getPost())
	// }, [dispatch])
	// // const { isLoaded, hasErrors, posts } = useSelector(state => state).postsSlice

	// useEffect(() => {
	// 	dispatch(fetchAllPosts())
	// }, [dispatch])
	// store.subscribe(() => console.log(store.getState()))
	return (
		<StyledContainer>
			<StyledFlexColumn width="90%" margin="0 auto">
				{/* {!isLoaded && (
					<StyledFlexRow>
						<StyledGreenText>Loading posts...</StyledGreenText>
					</StyledFlexRow>
				)}
				{hasErrors && (
					<StyledFlexRow>
						<StyledGreenText>There is an error fetching posts</StyledGreenText>
					</StyledFlexRow>
				)}
				{posts && posts.map(post => <PostSummary key={post.id} post={post} />)} */}
				<PostSummary />
				<PostSummary />
				<PostSummary />
				<PostSummary />
			</StyledFlexColumn>
		</StyledContainer>
	)
}
