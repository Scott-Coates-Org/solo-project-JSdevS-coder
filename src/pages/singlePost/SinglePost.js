import { StyledContainer } from 'styles/Container.styled'
import { StyledFlexColumn } from 'styles/FlexColumn.styled'
import { StyledGreenText } from 'styles/TextGreen.styled'
import Colosseum from '../../assets/coloseum.png'
import { ImAirplane } from 'react-icons/im'
import { StyledFlexRow } from 'styles/FlexRow.styled'
import ForecastCludy from '../../assets/forecast/ForecastCludy.png'
import Layout from 'components/layout'

export default function SinglePost() {
	return (
		<Layout>
			<StyledContainer padding="1em 2em" margin="5em 1em 1em 1em">
				<StyledFlexColumn>
					<h1
						style={{
							alignSelf: 'center',
							fontSize: '5em',
							fontFamily: 'Bradley Hand ITC',
							fontWeight: 'bold',
						}}>
						Colosseum
					</h1>
					<h1
						style={{
							alignSelf: 'center',
							fontFamily: 'Bradley Hand ITC',
							fontWeight: 'bold',
						}}>
						<i>Rome, Italy</i>
					</h1>
					<StyledContainer>
						<img src={Colosseum} alt="" width="80%" />
						<StyledGreenText textSize="2.5em">
							xx hours by <ImAirplane /> from you
						</StyledGreenText>
					</StyledContainer>

					<StyledFlexColumn padding="0 2em">
						<StyledFlexRow>
							<p style={{ padding: '1em 0', margin: '1em' }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Debitis tempora, ratione est ducimus corrupti consectetur
								delectus earum neque alias exercitationem tenetur totam harum
								hic quo nesciunt saepe vel cupiditate facilis.
							</p>
							<img
								src={Colosseum}
								alt=""
								width="400px"
								style={{ padding: '1em 0', margin: '0' }}
							/>
						</StyledFlexRow>

						<StyledFlexRow direction="row-reverse">
							<p style={{ padding: '1em 0', margin: '1em' }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Debitis tempora, ratione est ducimus corrupti consectetur
								delectus earum neque alias exercitationem tenetur totam harum
								hic quo nesciunt saepe vel cupiditate facilis.
							</p>
							<img
								src={Colosseum}
								alt=""
								width="400px"
								style={{ padding: '1em 0', margin: '0' }}
							/>
						</StyledFlexRow>
						<StyledFlexRow>
							<p style={{ padding: '1em 0', margin: '1em' }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Debitis tempora, ratione est ducimus corrupti consectetur
								delectus earum neque alias exercitationem tenetur totam harum
								hic quo nesciunt saepe vel cupiditate facilis.
							</p>
						</StyledFlexRow>
						<StyledGreenText align="left">
							<i>By Username</i>
						</StyledGreenText>
						<StyledFlexRow direction="row-reverse">
							<p style={{ padding: '1em 0', margin: '1em' }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Debitis tempora, ratione est ducimus corrupti consectetur
								delectus earum neque alias exercitationem tenetur totam harum
								hic quo nesciunt saepe vel cupiditate facilis.
							</p>
							<img
								src={ForecastCludy}
								alt=""
								width="300px"
								style={{ padding: '1em 0', margin: '1em' }}
							/>
						</StyledFlexRow>
						<StyledGreenText textSize="2.5em">
							Current weather: <i>Cludy - 00&deg;C, 00&deg;F</i>
						</StyledGreenText>
					</StyledFlexColumn>
				</StyledFlexColumn>
			</StyledContainer>
		</Layout>
	)
}
