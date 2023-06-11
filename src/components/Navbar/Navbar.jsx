import React from 'react'
import {
	AiFillCloseCircle,
	AiFillInstagram,
	AiFillYoutube,
	AiOutlineTwitter,
} from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { TbGridDots } from 'react-icons/tb'

import './Navbar.scss'

const Navbar = () => {
	const [active, setActive] = React.useState('menuDiv')

	const showNavbar = () => {
		setActive('menuDiv activeNavbar')
	}

	const closeNavbar = () => {
		setActive('menuDiv')
	}

	return (
		<header>
			<div className='header flex'>
				<div className='logoDiv'>
					<h3>Nature</h3>
				</div>

				<div className={active}>
					<ul className='menuList'>
						<li onClick={closeNavbar} className='navItem'>
							<a className='menuLink' href='#'>
								Home
							</a>
						</li>
						<li onClick={closeNavbar} className='navItem'>
							<a className='menuLink' href='#'>
								About
							</a>
						</li>
						<li onClick={closeNavbar} className='navItem'>
							<a className='menuLink' href='#'>
								Gallery
							</a>
						</li>
						<li onClick={closeNavbar} className='navItem'>
							<a className='menuLink' href='#'>
								Contact
							</a>
						</li>
						<li onClick={closeNavbar} className='navItem'>
							<a className='menuLink' href='#'>
								Videos
							</a>
						</li>
						<li onClick={closeNavbar} className='navItem'>
							<a className='menuLink' href='#'>
								Blog
							</a>
						</li>
					</ul>
					<div onClick={closeNavbar} className='closeNavbar'>
						<AiFillCloseCircle className='icon' />
					</div>
				</div>
				<div className='socialIcons flex'>
					<BsFacebook className='icon' />
					<AiOutlineTwitter className='icon' />
					<AiFillYoutube className='icon' />
					<AiFillInstagram className='icon' />
				</div>
				<div onClick={showNavbar} className='toggleNavbar'>
					<TbGridDots className='icon' />
				</div>
			</div>
		</header>
	)
}

export default Navbar
