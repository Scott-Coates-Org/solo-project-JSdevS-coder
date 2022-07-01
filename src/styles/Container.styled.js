import styled from 'styled-components'

export const StyledContainer = styled.div`
  min-width: 100%;
  min-height: 100vh;
  width: ${({ width }) => (width ? width : '100%')};
 	margin: ${({ margin }) => (margin ? margin : '0')};
	padding: ${({ padding }) => (padding ? padding : '0')};
  background-image: url(${({ src }) => (src ? src : 'none')})
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  img {
    align-self: center;
  }
`
