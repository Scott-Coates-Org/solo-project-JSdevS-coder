import React from 'react'
import { StyledFlexColumn } from 'styles/FlexColumn.styled'
import { StyledFlexRow } from 'styles/FlexRow.styled'
import { StyledFooter } from './Footer.styled'

export default function Footer() {
	return (
		<StyledFooter>
			<StyledFlexRow>
				<StyledFlexColumn>Copyright &copy; Semmy, 2022</StyledFlexColumn>
			</StyledFlexRow>
		</StyledFooter>
	)
}
