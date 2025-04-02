import { Outlet, useMatch, useNavigate } from 'react-router'
import arrow from '../../assets/arrow-down.svg'

export default function Tasks() {
	const navigate = useNavigate()
	const match = useMatch('/tasks')
	const taskmatch = useMatch('tasks/task/:id')

	return (
		<>
			<div
				onClick={() => match ?? navigate(-1)}
				className='text-xl text-white uppercase'
			>
				{match ? (
					'Категории'
				) : taskmatch ? (
					<div className='flex flex-row items-center leading-none gap-3'>
						<img className='rotate-90 relative bottom-0.5' src={arrow} alt='' />
						<span>Назад</span>
					</div>
				) : (
					<div className='flex flex-row items-center leading-none gap-3'>
						<img className='rotate-90 relative bottom-0.5' src={arrow} alt='' />
						<span>Доступные задачи</span>
					</div>
				)}
			</div>
			<div className='mt-5 w-full flex flex-col items-center'>
				<Outlet />
			</div>
		</>
	)
}
