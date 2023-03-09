import React from 'react'
import ProductCard from '../layouts/ProductCard'
import { Link } from 'react-router-dom'

const Home = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

	return (
		<>
			<h1 className='text-center w-full text-2xl'>FEATURED PRODUCTS</h1>
			<div className='border w-1/2 mx-auto mt-5'></div>
			<div className='container mx-auto flex flex-wrap justify-evenly'>
				{
					arr.slice(0, 9).map((element, index) => {
						return <ProductCard key={ index } />
					})
				}
			</div>

			<Link to='/products' className='w-full flex justify-center items-center mt-5'>
				<button className='border-2 mx-auto border-indigo-500 text-indigo-500 hover:bg-indigo-50 active:bg-white py-2 px-3 duration-150 rounded'>
					See More Products
				</button>
			</Link>
		</>
	)
}

export default Home