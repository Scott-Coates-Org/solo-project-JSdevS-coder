<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import { useAuth } from './user/auth'

//components
import NavBar from './NavBar'
import Hero from './Hero'

export default function Layout(props) {
	const { user } = useAuth()

	return (
		<>
			<Helmet>
				<link rel="icon" href="/public/favicon.ico" />
				<meta
					name="description"
					content="Connect with travelers community"
				/>
				<title>Travel App</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Lato&display=block"
					rel="stylesheet"
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
          `,
					}}
				/>
			</Helmet>
			<header>
				<LayoutNav user={user} {...props} />
			</header>
			{props.children}
		</>
	)
}

function LayoutNav(props) {
	const { user } = props
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => setIsOpen(!isOpen)

	const nav = (
		<div className="nav-wrapper border-bottom">
			<NavBar isOpen={isOpen} toggle={toggle} />
		</div>
	)

	return nav
=======
import Avatar from 'react-avatar';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import React from "react";
import { Helmet } from "react-helmet";
import { useAuth } from './user/auth';

export default function Layout(props) {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <link rel="icon" href="/public/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <title>Solo Project</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=block" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
          `}} />
      </Helmet>
      <header>
        <LayoutNav user={user} {...props} />
      </header>
      {props.children}
    </>
  )
}

function LayoutNav(props) {
  const { user } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (!user) {
    return <div>Not signed in ...</div>;
  }

  const nav = (
    <div className="nav-wrapper border-bottom">
      <Navbar light expand="lg">
        <NavbarBrand href="/">Solo Project</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="ml-auto">
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Avatar size={45} className="profile-image img-fluid rounded-circle mr-1" email={user.email} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="#">
                  Profile
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/logout">
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );

  return nav;
>>>>>>> e47f273875f14a0ee4031c323ee2b7a2be9bb760
}
