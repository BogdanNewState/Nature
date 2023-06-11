import './Discount.scss'

//import video
import video from '../../assets/video.mp4'

const Discount = () => {
	return (
		<div className='discount section'>
			<div className='secContainer'>
				<video src={video} autoPlay loop muted></video>
				<div className='textDiv'>
					<span className='title'>Sign Up for 35% Discount</span>
					<p>Want to get an instant discount? Sign up for our</p>

					<div className='inputBtn flex'>
						<input type='button' value='Enter your email' />
						<button className='btn'>Subscribe</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Discount
