import { Link } from 'react-router-dom'
import { StyledContainer } from 'styles/Container.styled'
import { StyledFlexColumn } from 'styles/FlexColumn.styled'
import { StyledFlexRow } from 'styles/FlexRow.styled'
import PostSummary from './PostSummary'

export default function PostList() {
	return (
		<StyledContainer>
			<StyledFlexColumn width="80%">
				<PostSummary />
				<PostSummary />
				<PostSummary />
				<PostSummary />
			</StyledFlexColumn>
		</StyledContainer>
	)
}
