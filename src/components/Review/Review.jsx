import './Review.scss'

// imported img
import people1 from '../../assets/people1.jpg'
import people2 from '../../assets/people2.jpg'

const Review = () => {
	return (
		<div className='review section'>
			<div className='secContainer'>
				<span className='secTitle'>What people say</span>

				<div className='reviewContainer container grid'>
					<div className='singleReview'>
						<div className='imgDiv'>
							<img src={people1} />
						</div>

						<p>
							lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
						</p>

						<div className='name'>John Doe</div>
					</div>
					<div className='singleReview'>
						<div className='imgDiv'>
							<img src={people2} />
						</div>

						<p>
							lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
						</p>

						<div className='name'>Grace Peso</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Review
