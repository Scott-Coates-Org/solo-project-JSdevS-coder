import styled from 'styled-components'

export const StyledButton = styled.button`
	width: ${({ width }) => (width ? width : '200px')};
	height: ${({ height }) => (height ? height : 'fit-content')};
	border: none;
	border-radius: 5px;
	padding: 1em;
	font-weight: bold;
	color: ${({ color }) => (color ? color : '#ffa403')};
	background: ${({ bg }) => (bg ? bg : '#126B12')};
	margin: ${({ margin }) => (margin ? margin : '1em 0')};
	&:hover {
		cursor: pointer;
		box-shadow: 0 0 0 1px rgb(0 0 0 / 20%);
	}
`
