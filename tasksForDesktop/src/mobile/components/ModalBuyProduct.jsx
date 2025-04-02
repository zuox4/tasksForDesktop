import { ArrowForwardIos, ArrowRight, Close, Error } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api/api'
import qr from './qr-code.png'
import { decrement } from '../../features/balance/balanceSlice'
import { Navigate } from 'react-router'
import { Link } from 'react-router'
import { loadProfileData } from '../../features/playerProfile/playerProfileSlice'
export function ModalBuyProduct({ setIsOpen, item, isOpen }) {
	const { id, title, description, url_src, price } = item
	const { balance } = useSelector(state => state.playerProfile.player)
	const [statusMessage, setStatusMessage] = useState(null)
	const [status, setStatus] = useState(false)
	const dispatch = useDispatch()
	const relevant = balance >= price

	const buttonMessage = relevant
		? `Обменять на ${price} KPoints`
		: `Недостаточно средств`

	const heandleClickBuyBotton = async product_id => {
		if (!relevant) return
		setStatusMessage('Выполняется транзакция')

		try {
			const { data } = await api.post('/shop/buy', { id: product_id })
			setTimeout(() => {
				setStatusMessage(data.message)
				setStatus(true)
				dispatch(loadProfileData())
			}, 2000)

			console.log(data)
		} catch (error) {
			setStatusMessage(error.response.data.detail)
		}
	}

	return (
		<div
			className='absolute top-0 bg-lig left-0 w-full h-full z-100'
			role='dialog'
			aria-modal='true'
			aria-labelledby='modal-title'
		>
			<div className='w-full fixed bottom-0 left-0 bg-blue  rounded-t-3xl z-10 px-4'>
				<div
					className='absolute right-4 top-4'
					onClick={() => setIsOpen(false)}
				>
					<Close />
				</div>
				<div className='flex flex-col items-center gap-5 mt-5 px-3'>
					<span className='text-center text-2xl uppercase font-bold text-white'>
						{title}
					</span>
					<div className='flex flex-row justify-between w-full gap-3 items'>
						<span className='text-left text-[16px] text-white'>
							{description}
						</span>

						<img className='w-30' src={url_src} alt='' />
					</div>
					{!statusMessage ? (
						<>
							{!relevant && (
								<>
									<span className='text-center text-gray'>
										*Выполняй задания и получай курпоинты, что бы обменять этот
										товар
									</span>
									<Link to={'/tasks'} className='text-white underline'>
										К заданиям
										<ArrowRight />
									</Link>
								</>
							)}

							<button
								onClick={() => {
									heandleClickBuyBotton(id)
								}}
								className={` flex  gap-2 bg-${
									relevant ? 'main' : 'gray'
								} px-3 text-lg text-white py-2 rounded-[10px] uppercase mb-13 mt-2`}
							>
								{buttonMessage}
								{!relevant && <Error />}
							</button>
						</>
					) : (
						<div className='w-full flex flex-col items-center mb-15 gap-3'>
							<h1 className=''>{statusMessage}</h1>
							{status && (
								<>
									<span className='text-gray text-center'>
										Покажите qr-cod на выдаче для получения товара
									</span>
									<img className='w-50 rounded-2xl' src={qr} alt='' />
								</>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
