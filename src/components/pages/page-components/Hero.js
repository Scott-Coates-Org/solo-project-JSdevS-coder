import { Container } from 'reactstrap'
//assets
import HeroGrid from '../../assets/Hero-grid.png'

export default function Hero() {
	return (
		<Container fluid style={{ marginTop: '4em' }}>
			<header>
				<p className="text-left call-msg">Join our travelers community!</p>
				<img
					src={HeroGrid}
					alt="hero-img"
					width="80%"
					className="img-fluid hero-img"
				/>
				<p className="text-right call-msg">
					Write about yours and see our travels!
				</p>
			</header>
		</Container>
	)
}
