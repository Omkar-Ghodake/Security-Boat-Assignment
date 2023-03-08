import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='navbar flex border-b-2 justify-between items-center px-10 py-5'>
			<div className="navbarBrand">
				<Link to={ '/' }><h1 className='text-3xl font-medium'>e.COM</h1></Link>
			</div>

			<ul className="navList list-none flex justify-between items-center space-x-8 text-xl">
				<Link to={ '/' }>
					<li className="navItem hover:scale-125 hover:text-indigo-500 duration-150">Home</li>
				</Link>
				<Link to={ '/products' }>
					<li className="navItem hover:scale-125 hover:text-indigo-500 duration-150">Products</li>
				</Link>
				<Link to={ '/aboutus' }>
					<li className="navItem hover:scale-125 hover:text-indigo-500 duration-150">About Us</li>
				</Link>
				<Link to={ '/contactus' }>
					<li className="navItem hover:scale-125 hover:text-indigo-500 duration-150">Contact Us</li>
				</Link>
			</ul>

			<ul className="navList list-none flex justify-between items-center space-x-8 text-xl">
				<Link to={ '/login' }>
					<li className="navItem hover:scale-125 hover:text-indigo-500 duration-150">Login</li>
				</Link>
				<Link to={ '/signup' }>
					<li className="navItem hover:scale-125 hover:text-indigo-500 duration-150">Signup</li>
				</Link>
			</ul>
		</nav>
	)
}

export default Navbar