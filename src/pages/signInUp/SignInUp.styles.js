import styled from 'styled-components'

export const StyledForm = styled.form`
	width: ${({ width }) => (width ? width : '50%')};
	margin: ${({ margin }) => (margin ? margin : 'auto')};
	padding: ${({ padding }) => (padding ? padding : '1em')};
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;

	label {
		border-color: #126b12;
	}

	input {
		margin: 0;
		padding: 1em;
		border-radius: 10px;
		width: 100%;
		border-color: #126b12;
	}
`
