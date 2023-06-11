//imported icons
import { FaLocationArrow } from 'react-icons/fa'
import { HiPhone } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'

import './Footer.scss'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='secContainer container'>
				<div className='content grid'>
					<div className='row'>
						<div className='spanText'>CONTACT US</div>

						<div className='contactDiv'>
							<span className='flex'>
								<HiPhone className='icon' />
								<span>+91-9876543210</span>
							</span>
							<span className='flex'>
								<MdEmail className='icon' />
								<span>q2QqB@example.com</span>
							</span>
							<span className='flex'>
								<FaLocationArrow className='icon' />
								<span>Bangalore</span>
							</span>
						</div>
					</div>

					<div className='row'>
						<div className='spanText'>POPULAR NEWS</div>

						<div className='singleNews'>
							<span className='text'>
								Your personal Guide to the best places to eat.
							</span>
							<p>Jan 14, 2023</p>
						</div>

						<div className='singleNews'>
							<span className='text'>
								Your grand reveal of the most iconic hotel in the world.
							</span>
							<p>Jan 17, 2023</p>
						</div>
					</div>

					<div className='row'>
						<div className='spanText'>QUICK LINKS</div>
						<div className='footerLinks'>
							<ul>
								<li>About Us</li>
								<li>Our team</li>
								<li>Gallery</li>
								<li>Blog</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='bottomDiv flex'>
					<p>Copyright &copy; 2023 Bogdan - All rights reserved</p>

					<div className='social flex'>No social links</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
