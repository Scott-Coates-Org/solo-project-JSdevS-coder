import Layout from 'components/layout'
import { AuthContext } from 'components/user/auth'
import { StyledForm } from 'pages/signInUp/SignInUp.styles'
import { useState } from 'react'
// import { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import { Col } from 'reactstrap'
import { createPost } from 'redux/post'

import { StyledButton } from 'styles/Button.styled'
import { StyledContainer } from 'styles/Container.styled'
import { StyledFlexColumn } from 'styles/FlexColumn.styled'
import { StyledFlexRow } from 'styles/FlexRow.styled'
import { StyledGreenText } from 'styles/TextGreen.styled'

export default function Create() {
	// const { user } = useContext(AuthContext)
	console.log(user)
	const user = ''
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [city, setCity] = useState('')
	const [country, setCountry] = useState('')
	const [images, setImages] = useState([])
	const [post, setPost] = useState({
		title,
		body,
		city,
		country,
		images,
		currentWeather: {},
		location: [],
		author: user,
		monthlyWeather: '',
		time: new Date().toDateString(),
	})

	// const { posts, isLoaded, error } = useSelector(state => state.posts)

	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(addPost(post))
	// }, [dispatch])
	// console.log(post)
	// const handleSubmit = () => {
	// 	if (user) {
	// 		setPost({
	// 			title,
	// 			body,
	// 			city,
	// 			country,
	// 			images,
	// 			location,
	// 			author,
	// 			monthlyWeather,
	// 			time,
	// 		})
	// 		dispatch(addPost(post))
	// 	}
	// }
	const handleSubmit = () => {}
	return (
		<Layout>
			<StyledContainer>
				<StyledForm onSubmit={handleSubmit}>
					<StyledFlexColumn margin="6em auto">
						<StyledGreenText>Tell us where've you been!</StyledGreenText>
						<StyledFlexColumn>
							<label>
								<p>Title</p>
								<input
									type="text"
									onChange={e => setTitle(e.target.value)}></input>
							</label>
						</StyledFlexColumn>
						<StyledFlexRow justify="space-between">
							<StyledFlexColumn>
								<label>
									<p>City</p>
									<input
										type="text"
										onChange={e => setCity(e.target.value)}></input>
								</label>
							</StyledFlexColumn>
							<StyledFlexColumn>
								{' '}
								<label>
									<p>Country</p>
									<input
										type="text"
										onChange={e => setCountry(e.target.value)}></input>
								</label>
							</StyledFlexColumn>
						</StyledFlexRow>
						<StyledFlexColumn>
							<label>
								<p>Content</p>
								<textarea
									style={{ width: '100%' }}
									placeholder="Tell us your experience"
									onChange={e => setBody(e.target.value)}
								/>
							</label>
						</StyledFlexColumn>
						<StyledFlexRow justify="space-between" align="center">
							<StyledFlexColumn justify="left">
								<label>
									<p style={{ margin: '0' }}>Images</p>

									<input type="file" style={{ padding: '0.5em 0' }}></input>
								</label>
							</StyledFlexColumn>
							<Col style={{ alignSelf: 'center' }}>
								<StyledButton
									onClick={e => setImages([...images, e.target.value])}>
									Add
								</StyledButton>
							</Col>
						</StyledFlexRow>
						<Row width="50%" margin="0 auto" style={{ alignSelf: 'center' }}>
							<StyledButton>Submit post</StyledButton>
						</Row>
					</StyledFlexColumn>
				</StyledForm>
			</StyledContainer>
		</Layout>
	)
}
