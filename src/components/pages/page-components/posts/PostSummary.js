import React from 'react'
import { Link } from 'react-router-dom'
import { StyledContainer } from 'styles/Container.styled'
import { StyledFlexColumn } from 'styles/FlexColumn.styled'
import { StyledFlexRow } from 'styles/FlexRow.styled'
import { StyledGreenText } from 'styles/TextGreen.styled'

//assets
import Colosseum from '../../../assets/coloseum.png'

export default function PostSummary() {
	return (
		<StyledFlexRow
			justify="space-between"
			margin="1em auto"
			padding="1em 0"
			style={{ boxShadow: '0px 0px 5px #126b12 ' }}>
			<StyledFlexColumn
				margin="0"
				padding="1em"
				style={{ textAlign: 'center' }}>
				<img src={Colosseum} alt="" width="400px" />
				<StyledGreenText textSize="2em">
					<i>By Username</i>
				</StyledGreenText>
			</StyledFlexColumn>
			<StyledFlexColumn margin="0 2em">
				<h1>
					Colosseum - Rome, <i>Italy</i>
				</h1>
				<p>xxx miles / xxx km from you</p>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
					inventore! Molestias saepe accusamus fugiat asperiores! Ad inventore
					saepe doloribus, quae perspiciatis totam accusantium, voluptates nulla
					eos perferendis dolorum ex eligendi.
					<p style={{ padding: '1em 0', margin: '0' }}>
						<Link to="/singlepost" style={{ padding: '0', margin: '0' }}>
							See more...
						</Link>
					</p>
				</div>
			</StyledFlexColumn>
		</StyledFlexRow>
	)
}
