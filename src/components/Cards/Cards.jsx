import './Cards.scss'

//imported img for cards
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.jpg'

// imported icons
import { AiOutlineSwapRight } from 'react-icons/ai'

const Cards = () => {
	return (
		<div className='cards'>
			<div className='cardContainer container grid'>
				<div className='singleCard'>
					<div className='imgDiv'>
						<img src={card1} />
					</div>
					<h4 className='textDiv'>Beautiful mountains</h4>
				</div>
				<div className='singleCard'>
					<div className='imgDiv'>
						<img src={card2} />
					</div>
					<h4 className='textDiv'>Lovely views of the volcano</h4>
				</div>
				<div className='singleCard'>
					<div className='imgDiv'>
						<img src={card3} />
					</div>
					<h4 className='textDiv'>Top view of the forest</h4>
				</div>
			</div>

			<div className='spanText flex'>
				Other types
				<AiOutlineSwapRight className='icon' />
			</div>
		</div>
	)
}

export default Cards
