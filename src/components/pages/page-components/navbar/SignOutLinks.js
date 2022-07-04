import { NavLink } from 'react-router-dom'
import { Navbar } from 'reactstrap'
export default function SignOutLinks() {
	return (
		<Navbar expand="lg">
			<NavLink to="/signin">Sign In</NavLink>
			<NavLink to="/signup">Sign Up</NavLink>
		</Navbar>
	)
}
