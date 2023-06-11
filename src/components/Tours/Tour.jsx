import './Tour.scss'

// imported img
import tour1 from '../../assets/tour1.jpg'
import tour2 from '../../assets/tour2.jpg'

// imported icon
import { AiFillStar } from 'react-icons/ai'

const Tour = () => {
	return (
		<div className='tours container section'>
			<div className='secContainer'>
				<span className='secTitle'>Nature Tours</span>

				<div className='tourContainer'>
					<div className='singleTour grid'>
						<div className='imgDiv'>
							<img src={tour1} />
						</div>
						<div className='tourInfo'>
							<span className='tourTitle'>Somewhere in the U.S.</span>
							<div className='starsReview flex'>
								<div className='stars'>
									<AiFillStar className='icon' />
									<AiFillStar className='icon' />
									<AiFillStar className='icon' />
									<AiFillStar className='icon' />
									<AiFillStar className='icon' />
								</div>

								<small className='custReview'>2 Customers Review</small>
							</div>
							<p>Go conquer the desert lands of the U.S.</p>
							<button className='btn'>Buy this tour</button>
						</div>

						<span className='price'>$740</span>
					</div>
					<div className='singleTour grid'>
						<div className='imgDiv'>
							<img src={tour2} />
						</div>
						<div className='tourInfo'>
							<span className='tourTitle'>Somewhere in the Turkey</span>
							<div className='starsReview flex'>
								<div className='stars'>
									<AiFillStar className='icon' />
									<AiFillStar className='icon' />
									<AiFillStar className='icon' />
									<AiFillStar className='icon' />
									<AiFillStar className='icon' />
								</div>

								<small className='custReview'>2 Customers Review</small>
							</div>
							<p>Fly to Turkish beaches</p>
							<button className='btn'>Buy this tour</button>
						</div>

						<span className='price'>$670</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tour
