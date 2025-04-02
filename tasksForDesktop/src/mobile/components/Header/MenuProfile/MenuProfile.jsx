import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import arrowDown from '../../../assets/arrow-down.svg'
import { logout } from '../../../../features/auth/authSlice'
import photoUser from '../../../assets/photoUser.png'
import { Link, NavLink } from 'react-router'
export const MenuProfile = () => {
	const [open, setOpen] = useState(false)
	const { fullName } = useSelector(state => state.playerProfile.player)
	const dispatch = useDispatch()
	const [fN, sN, tN] = fullName.split(' ')
	const ref = useRef(null)
	const handleClickOutside = event => {
		if (open && ref.current && !ref.current.contains(event.target)) {
			console.log('Клик вне элемента!')
			setOpen(false) // Закрываем элемент
		}
	}

	const handleClickOnMenu = () => {
		setOpen(prev => !prev)
	}
	useEffect(() => {
		if (open) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [open])

	return (
		<div ref={ref} className='absolute top-[12px] right-3'>
			<div
				className={`flex flex-col items-left ${
					!open ? 'bg-main' : 'bg-blue'
				} h-fit p-3 rounded-[5px] text-white w-fit pr-10`}
				onClick={handleClickOnMenu}
			>
				<div className='flex flex-row items-center'>
					<div className='uppercase font-black text-[13px] leading-none'>
						{fN} {sN[0]}.{tN[0]}.
					</div>
					<img className='ml-3 w-3' src={arrowDown} alt='' />
					<img
						src={photoUser}
						className='size-[42px] bg-orange rounded-full absolute right-[-10px] border-3'
					></img>
				</div>
				{open && (
					<div className='flex flex-col mt-5 gap-5'>
						<NavLink
							className={({ isActive }) =>
								`px-2 rounded-lg bg-${isActive && 'main'}`
							}
							to={'/my-tasks'}
						>
							Мои задачи
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`px-2 rounded-lg bg-${isActive && 'main'}`
							}
							to={'/my-products'}
						>
							Мои покупки
						</NavLink>
						<span className='' onClick={() => dispatch(logout())}>
							Выйти
						</span>
					</div>
				)}
			</div>
		</div>
	)
}
