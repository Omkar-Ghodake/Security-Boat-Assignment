import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
	const productId = 1234

	return (
		<div className="p-6 w-full md:w-[15vw] lg:w-[25vw] sm:mb-0 mb-6 rounded-lg">
			<div className='shadow-2xl rounded-lg group'>
				<Link to={ `/product:${productId}` } className="rounded-lg h-full overflow-hidden flex justify-center bg-white p-5">
					<img alt="content" className="object-cover object-center w-[70%] group-hover:scale-110 duration-150" src='https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70' />
				</Link>

				<div className='p-5'>
					<Link to={ `/product:${productId}` } >
						<span className="text-xl font-medium title-font text-gray-900 hover:underline duration-150">Apple Iphone 14 Pro</span>
					</Link>

					<div className='flex flex-col'>
						<span>Price</span>
						<span className='text-xl font-medium'>₹1,22,999</span>
					</div>

					<p className="text-base leading-relaxed mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum quod assumenda quae natus dolores?</p>

					<div className='flex justify-between items-center pt-5'>
						<button>Add To Cart</button>
						<button>Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard