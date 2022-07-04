import { useContext } from 'react'
import { AuthContext } from '../../user/auth'

//styles
import { Navbar, NavbarBrand } from 'reactstrap'

//assets
import Logo from '../../../assets/WhereTo.png'

//components
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { Link } from 'react-router-dom'

export default function NavBar({ isOpen, toggle }) {
	const { user } = useContext(AuthContext)
	console.log(user)
	return (
		<Navbar className="navBar" expand="lg">
			<Link to="/" style={{ padding: '0', background: 'white' }}>
				<NavbarBrand>
					<img src={Logo} alt="logo" height="80px" />
				</NavbarBrand>
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
