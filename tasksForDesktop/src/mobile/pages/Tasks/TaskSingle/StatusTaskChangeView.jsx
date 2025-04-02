import { useEffect, useState } from 'react'
import confirm from './confirm.svg'
import { Icon } from '../../../ui/Icon'
export const StatusTaskChangeView = ({ text, status }) => {
	const [isVisible, setIsVisible] = useState(false)
	useEffect(() => {
		setIsVisible(true)
	}, [])

	return (
		<div
			className='w-full flex flex-col items-center gap-3'
			style={{
				opacity: isVisible ? 1 : 0,
				transform: `translateY(${isVisible ? 0 : '20px'})`,
				transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
			}}
		>
			<img className='w-10' src={confirm} alt='sferum' />
			<span className='text-center uppercase text-white'>{text}</span>
		</div>
	)
}
