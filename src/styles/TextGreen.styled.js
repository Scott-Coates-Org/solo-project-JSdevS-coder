import styled from 'styled-components'

export const StyledGreenText = styled.div`
	font-family: 'Bradley Hand ITC';
	font-size: ${({ textSize }) => (textSize ? textSize : '3em')};
	font-weight: 900;
	color: #126B12;
	margin: width: ${({ margin }) => (margin ? margin : '1em')};
	text-align: ${({ align }) => (align ? align : 'center')};
	width: ${({ width }) => (width ? width : '100%')};
`
