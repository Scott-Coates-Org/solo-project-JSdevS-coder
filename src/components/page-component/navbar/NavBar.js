// import { useContext } from 'react'
// import { AuthContext } from '../../user/auth'

//styles
import { Navbar, NavbarBrand } from 'reactstrap'

//assets
import Logo from '../../../assets/WhereTo.png'

//components
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { Link } from 'react-router-dom'

export default function NavBar({ isOpen, toggle }) {
	// const { user } = useContext(AuthContext)
	const user = {}
	const posts = []
	return (
		<Navbar className="navBar" expand="lg">
			<Link to="/" style={{ padding: '0', background: 'white' }}>
				<span className="navbar-brand">
					<img src={Logo} alt="logo" height="80px" />
				</span>
			</Link>

			{user && (
				<div className="nav-wrapper border-bottom">
					<SignInLinks user={user} isOpen={isOpen} toggle={toggle} />
				</div>
			)}
			{!user && <SignOutLinks />}
		</Navbar>
	)
}
