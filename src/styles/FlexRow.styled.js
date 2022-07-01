import styled from 'styled-components'

export const StyledFlexRow = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => (direction ? direction : 'row')};
	justify-content: ${({ justify }) => (justify ? justify : 'left')};
	align-content: center;
	box-sizing: border-box;
	height: fit-content;
	margin: ${({ margin }) => (margin ? margin : '0')};
	padding: ${({ padding }) => (padding ? padding : '0.5em')};
`
