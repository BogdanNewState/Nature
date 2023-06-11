import './Staff.scss'

// imported img
import people1 from '../../assets/people1.jpg'
import people2 from '../../assets/people2.jpg'

const Staff = () => {
	return (
		<div className='staff container section'>
			<div className='secContainer'>
				<span className='secTitle'>Different People - One Mission</span>

				<div className='staffContainer grid'>
					<div className='singleStaff'>
						<div className='imgDiv'>
							<img src={people1} />
						</div>

						<span className='name'>Nicola Testo</span>
						<span className='titleJob'>Director of Sales</span>
						<span className='contact'>+91 9876543210</span>
					</div>
					<div className='singleStaff'>
						<div className='imgDiv'>
							<img src={people2} />
						</div>

						<span className='name'>Nicola Testo</span>
						<span className='titleJob'>Director of Sales</span>
						<span className='contact'>+91 9876543210</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Staff
