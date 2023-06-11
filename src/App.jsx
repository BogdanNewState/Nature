import Cards from './components/Cards/Cards'
import Discount from './components/Discount/Discount'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Review from './components/Review/Review'
import Staff from './components/Staff/Staff'
import Tour from './components/Tours/Tour'

const App = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<Cards />
			<Tour />
			<Discount />
			<Review />
			<Staff />
			<Footer />
		</div>
	)
}

export default App
