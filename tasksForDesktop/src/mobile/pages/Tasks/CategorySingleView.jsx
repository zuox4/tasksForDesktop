import { Icon } from '../../ui/Icon'
import { Link } from 'react-router'
export const CategorySingleView = ({ id, name }) => {
	return (
		<Link to={`${id}`}>
			<div className='w-full bg-white px-3 flex flex-row justify-between  py-4 rounded-[10px] items-center'>
				<span className='font-bold relative uppercase top-0.5 text-[16px]'>
					{name}
				</span>
				<div className='w-20 flex flex-col items-center justify-center'>
					<Icon
						id={name}
						className='w-18 bg-white absolute p-1 rounded-[10px] inset-shadow-sm h-20 '
					/>
					{/* <img
					src={icon}
					alt=''
					className='w-18 bg-white absolute p-1 rounded-[10px] inset-shadow-sm '
				/> */}
				</div>
			</div>
		</Link>
	)
}
