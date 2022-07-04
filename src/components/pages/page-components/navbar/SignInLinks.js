import Avatar from 'react-avatar'
import {
	DropdownItem,
	Nav,
	Navbar,
	NavbarToggler,
	Collapse,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
} from 'reactstrap'

export default function SignInLinks({ user, toggle, isOpen }) {
	return (
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
	)
}
