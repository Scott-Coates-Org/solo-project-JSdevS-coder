import { useContext } from 'react'
import { AuthContext } from '../user/auth'
import Avatar from 'react-avatar'
import {
	DropdownItem,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
} from 'reactstrap'

//assets
import Logo from '../../assets/WhereTo.png'

export default function NavBar({ isOpen, toggle }) {
	const { user } = useContext(AuthContext)
	console.log(user)
	return (
		<Navbar className="navBar" expand="lg">
			<NavbarBrand>
				<img src={Logo} alt="logo" height="80px" />
			</NavbarBrand>
			{user && (
				<div className="nav-wrapper border-bottom">
					<Navbar expand="lg">
						<NavbarToggler onClick={toggle} />
						<Collapse isOpen={isOpen} navbar>
							<Nav navbar className="ml-auto">
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										<Avatar
											size={45}
											className="profile-image img-fluid rounded-circle mr-1"
											email={user.email}
										/>
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem href="/">Home</DropdownItem>
										<DropdownItem divider />
										<DropdownItem href="/profile">Profile</DropdownItem>
										<DropdownItem divider />
										<DropdownItem href="/create">Create post</DropdownItem>
										<DropdownItem divider />
										<DropdownItem href="/logout">Logout</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
			)}
		</Navbar>
	)
}
