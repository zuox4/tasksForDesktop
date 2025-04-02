import { useRef, useState, useEffect } from 'react'
import { HeaderPreview } from './HeaderPreview'
import { FirstView } from './FirstView'
import { SecondView } from './SecondView'
import maket from '../../assets/maket.svg'
import { ThirdView } from './ThirdView'
import { useDispatch } from 'react-redux'
import { setPreviewClose } from '../../../features/preview/previewSlice'

export function Preview() {
	const [isOpen, setOpen] = useState(true)
	const [numberView, setNumberView] = useState(1)
	const ref = useRef(null)
	const dispatch = useDispatch()
	useEffect(() => {
		const element = ref.current
		if (!element) return

		const handleClick = e => {
			const middleX = window.innerWidth / 2
			const direction = e.clientX < middleX ? -1 : 1

			setNumberView(prev => {
				const newValue = prev + direction
				return newValue < 1 ? 1 : newValue > 5 ? 5 : newValue
			})
		}

		element.addEventListener('click', handleClick)

		return () => {
			element.removeEventListener('click', handleClick)
		}
	}, [setNumberView])

	useEffect(() => {
		setOpen(numberView !== 5)
		numberView == 5 && dispatch(setPreviewClose())
	}, [numberView])
	useEffect(() => {
		if (isOpen) {
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
	}, [isOpen])

	if (!isOpen) return null
	return (
		isOpen && (
			<div
				ref={ref}
				className='no-selection h-full w-full top-0 fixed left-0 bg-main z-999 flex flex-col px-4 overflow-hidden'
			>
				<img
					src={maket}
					alt=''
					className='absolute h-[100%] transition-transform duration-2000 ease-in-out w-[500%] max-w-max opacity-3'
					style={{ transform: `translateX(${-200 * numberView}px)` }}
				/>
				<HeaderPreview numberView={numberView} setNumberView={setNumberView} />

				{numberView == 1 && <FirstView />}
				{numberView == 2 && <SecondView />}
				{numberView == 3 && <ThirdView />}
			</div>
		)
	)
}
