import React from 'react'
import ProductCard from '../layouts/ProductCard'

const Products = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

	return (
		<>
			<div className='container mx-auto flex flex-wrap justify-between'>
				{
					arr.map((element, index) => {
						return <ProductCard key={ index } />
					})
				}
			</div>
		</>
	)
}

export default Products