import React from 'react'
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import { useAuth } from './user/auth'

//components
import NavBar from './page-component/NavBar'

export default function Layout(props) {
	const { user } = useAuth()

	return (
		<>
			<Helmet>
				<link rel="icon" href="/public/favicon.ico" />
				<meta name="description" content="Connect with travelers community" />
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
			<NavBar isOpen={isOpen} toggle={toggle} user={user} />
		</div>
	)

	return nav
}
