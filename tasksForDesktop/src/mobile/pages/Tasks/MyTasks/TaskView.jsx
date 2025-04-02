import clock from '../../../assets/clockIcon.svg'
import arrowDown from '../../../assets/arrow-down.svg'
import { Link } from 'react-router'
import { styled } from '@mui/material'
export function TaskView({ taskId, status, title, color }) {
	return (
		<Link
			to={`/tasks/task/${taskId}`}
			className={`w-full flex justify-between  px-3 py-2 rounded`}
			style={{ background: color }}
		>
			<div className={`flex flex-col gap-4`}>
				<div className='flex flex-row gap-2'>
					<img src={clock} className='w-[20px]' alt='' />
					<span className='text-white lowercase text-[15px] '>{status}</span>
				</div>
				<div>
					<h1 className='uppercase font-bold'>{title}</h1>
				</div>
			</div>
			<div className='flex items-center'>
				<img className='rotate-270 w-4 ' src={arrowDown} alt='' />
			</div>
		</Link>
	)
}
