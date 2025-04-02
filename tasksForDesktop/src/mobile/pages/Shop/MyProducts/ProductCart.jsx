import { Link } from 'react-router'
import qr from './qr-code.png'
import { useEffect, useState } from 'react'
import moment from 'moment/moment'
import 'moment/locale/ru'
import { Close } from '@mui/icons-material'

const ModalWithQr = ({ id, qr_url, setVisible, visible, status }) => {
	useEffect(() => {
		if (visible) {
			// Блокировка скролла
			document.body.style.overflow = 'hidden'
			// Компенсация ширины скроллбара
			document.body.style.paddingRight =
				window.innerWidth - document.documentElement.clientWidth + 'px'
		}

		return () => {
			// Восстановление скролла
			document.body.style.overflow = 'auto'
			document.body.style.paddingRight = '0'
		}
	}, [visible])

	if (!visible) return null
	return (
		<div
			className='w-full h-full bg-lig fixed top-0 left-0 flex flex-col items-center z-100'
			onClick={() => setVisible(false)}
		>
			<div className='w-80 mt-50 flex flex-col items-center bg-white p-10 rounded-2xl'>
				<div className='text-center text-2xl uppercase underline text-gray flex w-full justify-center'>
					<span>Заказ N#{id}</span>
					<div className=''>{/* <Close /> */}</div>
				</div>
				{!(status === 'выдан') && <img src={qr_url} alt='' className='w-70' />}
				<span className='uppercase font-bold text-gray mt-5'>{status}</span>
				{!(status === 'выдан') && (
					<span className=' text-gray mt-5 text-center'>
						*Покажите qr-code на пункте выдачи призов
					</span>
				)}
			</div>
		</div>
	)
}

export function ProductCart({ item }) {
	const [visible, setVisible] = useState(false)
	const {
		transactionId,
		productTitle,
		productPrice,
		purchaseDate,
		issueDate,
		status,
		productDescription,
	} = item
	const datepurchaseDate = new Date(purchaseDate)

	const dateissueDate = new Date(issueDate)
	moment.locale('ru')
	const mpurchaseDate = moment(datepurchaseDate).format('LL')
	const mdateissueDate = moment(dateissueDate).format('LL')
	return (
		<>
			{visible && (
				<ModalWithQr
					qr_url={qr}
					id={transactionId}
					setVisible={setVisible}
					visible={visible}
					status={status}
				/>
			)}
			<div
				onClick={() => setVisible(true)}
				className='w-full flex flex-col gap-3 items-center bg-white py-1 px-2 rounded-xl'
			>
				<span className='uppercase text-gray text-xs'>
					Дата операции: {issueDate ? mdateissueDate : mpurchaseDate}
				</span>
				<div className='w-full flex flex-row justify-between'>
					<div className='flex flex-col'>
						<span className='uppercase font-bold'>{productTitle}</span>
						<span className='line-clamp-2'>{productDescription}</span>
						<span className='uppercase font-bold'>{status}</span>
					</div>
					{!(status === 'выдан') && (
						<div className=''>
							<img className='w-20' src={qr} alt='' />
						</div>
					)}
				</div>
			</div>
		</>
	)
}
