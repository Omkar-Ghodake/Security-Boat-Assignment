import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
	const [passHidden, setPassHidden] = useState(true)

	const handleLoginFormSubmit = (e) => {
		e.preventDefault()
	}

	const togglePassHidden = () => {
		passHidden
			? setPassHidden(false)
			: setPassHidden(true)
	}

	return (
		<div className='container mx-auto'>
			<div className="w-1/2 mx-auto shadow-xl bg-white rounded-lg">
				<div className='p-8'>
					<div className="head text-center text-3xl font-medium">
						LOGIN
					</div>

					<form className="body mt-8 flex flex-col justify-center items-center space-y-8" onSubmit={ handleLoginFormSubmit }>
						<div className="input-group w-1/2 rounded relative">
							<label htmlFor="email" className='absolute -top-3 left-3 bg-white px-[7px]'>Email</label>
							<input type="text" id='email' name='email' className='outline-none border-2 border-slate-300 focus:border-indigo-500 p-3 rounded duration-150 w-full' />
							<HiOutlineMail className='absolute right-2 top-3 text-2xl' />
						</div>

						<div className="input-group w-1/2 rounded relative">
							<label htmlFor="password" className='absolute -top-3 left-3 bg-white px-[7px]'>Password</label>
							<input type={ `${passHidden ? 'password' : 'text'}` } id='password' name='password' className={ `outline-none border-2 border-slate-300 focus:border-indigo-500 p-3 rounded duration-150 w-full ${passHidden && 'tracking-widest'}` } />
							{ passHidden ?
								< RxEyeClosed className={ `absolute right-2 top-2 text-4xl cursor-pointer hover:bg-slate-100 rounded-full p-2 duration-150` } onClick={ togglePassHidden } /> :
								< RxEyeOpen className={ `absolute right-2 top-2 text-4xl cursor-pointer hover:bg-slate-100 rounded-full p-2 duration-150` } onClick={ togglePassHidden } />
							}
						</div>

						<button role={ 'submit' } className='border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-50 active:bg-white w-1/2 p-3 duration-150'>LOGIN</button>
					</form>

					<div className='flex flex-col items-center space-y-3 justify-center mt-8'>
						<p>or Login with</p>

						<div className="flex space-x-5">
							<FcGoogle className='text-5xl cursor-pointer hover:bg-zinc-200 rounded-full p-2 duration-150' />
							<FaFacebook className='text-5xl cursor-pointer hover:bg-zinc-200 rounded-full p-2 duration-150 text-facebook' />
						</div>
					</div>

					<div className='border mt-8 w-1/2 mx-auto'></div>

					<div className='flex flex-col items-center justify-center mt-8 space-y-5'>
						<p>Don't have an Account?</p>
						<Link to={ '/signup' } className='w-1/2'>
							<button className='border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-50 active:bg-white w-full p-3 duration-150'>
								SIGNUP
							</button>
						</Link>
					</div>
				</div>
				<div className="footer mt-8 bg-indigo-300 rounded-b-lg p-5">
					<div className="head text-center text-3xl font-medium">
						e.COM
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login