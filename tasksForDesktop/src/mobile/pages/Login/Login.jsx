import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo1298white.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
	login,
	loginFailure,
	loginStart,
	loginSuccess,
	resetLoading,
} from '../../../features/auth/authSlice'
import { Link, useNavigate } from 'react-router'
import Lottie from 'lottie-react'
import animationLogo from '../../pages/Apps/Scene.json'

import VerificationCodeInput from './VerificationCodeInput'
import { CircularProgress } from '@mui/material'
import api from '../../../api/api'
import { Preview } from '../../components/Preview/Preview'

const Login = () => {
	const [email, setEmail] = useState('')

	const [isCodeSent, setIsCodeSent] = useState(false)
	// const [error_email, setError] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { error } = useSelector(state => state.auth)
	const [code, setCode] = useState('')
	const { loading } = useSelector(state => state.auth)
	const handleEmailChange = e => {
		setEmail(e.target.value)
	}

	const handleCodeChange = e => {
		setCode(e.target.value)
	}

	const handleSendEmail = e => {
		e.preventDefault()
		dispatch(loginStart())
		api
			.post('/auth/chek_email', { email: email })
			.then(res => {
				if (res.status === 200) {
					dispatch(resetLoading())
					setIsCodeSent(true)
				}
			})
			.catch(err => {
				if (err.code === 'ERR_NETWORK') {
					// setError('Сервер не отвечает')
					dispatch(loginFailure('Сервер не отвечает'))
				}
				if (err.status === 404) {
					dispatch(loginFailure('Пользователь не найден'))
				}
			})
	}

	const handleVerifyCode = code => {
		dispatch(login({ email: email, code: code }, navigate))
	}
	const resetAuth = () => {
		setEmail('')
		dispatch(loginFailure())
		navigate('/')
	}

	return (
		<>
			<div className='flex flex-col items-center mt-3'>
				<form className='flex flex-col items-center w-[300px] gap-[20px]'>
					{/* <img src={logo} alt='logo' /> */}
					<Lottie animationData={animationLogo} />
					<h2 className=' mt-7 text-2xl font-custom font-bold uppercase text-white'>
						Вход в приложение
					</h2>
					{!isCodeSent && (
						<div>
							<label className='text-1xs font-custom font-bold uppercase text-gray text-left w-full'>
								Email:
							</label>
							<input
								className='bg-white text-center text-[20px] rounded-xs h-10 px-4 w-full mt-2 '
								type='email'
								placeholder='Введите E-mail'
								value={email}
								onChange={handleEmailChange}
							/>
						</div>
					)}

					{isCodeSent && (
						<>
							<div className='text-white text-center text-3xs'>
								Код подтверждения выслан на электронную почту
							</div>
							<label className='text-2xs text-10 font-custom font-bold uppercase text-gray text-center w-full'>
								Введите Код подтверждения:
							</label>
							{/* <input
							className='bg-white font-custom uppercase rounded-xs h-10 px-4 w-full'
							type='text'
							value={code}
							onChange={handleCodeChange}
						/> */}
							<VerificationCodeInput length={6} onComplete={handleVerifyCode} />
						</>
					)}
					{loading && <CircularProgress />}
					{!isCodeSent && (
						<button
							onClick={isCodeSent ? handleVerifyCode : handleSendEmail}
							type='submit'
							className=' px-10 py-2 bg-darkmain rounded-lg text-white '
						>
							Получить код
						</button>
					)}
				</form>
				{<p className='text-red font-custom font-bold mt-5'>{error}</p>}
				{error === 'Login failed' && (
					<div className='text-white underline' onClick={() => resetAuth()}>
						Назад
					</div>
				)}
			</div>
		</>
	)
}

export default Login
