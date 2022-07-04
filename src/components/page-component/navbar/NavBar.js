// import { useContext } from 'react'
// import { AuthContext } from '../../user/auth'

//styles

//assets
import Logo from '../../../assets/WhereTo.png'

//components
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { Link } from 'react-router-dom'
import { StyledContainer } from 'styles/Container.styled'
import { StyledFlexColumn } from 'styles/FlexColumn.styled'
import { StyledFlexRow } from 'styles/FlexRow.styled'

export default function NavBar({ isOpen, toggle }) {
	// const { user } = useContext(AuthContext)
	const user = {}
	const posts = []
	return (
		<StyledContainer>
			<StyledFlexRow>
				<div>
					{' '}
					<Link to="/" style={{ padding: '0', background: 'white' }}>
						<span className="navbar-brand">
							<img src={Logo} alt="logo" height="80px" />
						</span>
					</Link>
				</div>
				<div>
					{' '}
					{user && (
						<div className="nav-wrapper border-bottom">
							<SignInLinks user={user} isOpen={isOpen} toggle={toggle} />
						</div>
					)}
					{!user && <SignOutLinks />}
				</div>
			</StyledFlexRow>
		</StyledContainer>
	)
}
