import arrowDown from '../../assets/arrow-down.svg'
import Tpoints from '../../assets/Kpoints.svg'

import { Icon } from '../../ui/Icon'

import moment from 'moment/moment'
import 'moment/locale/ru'

import clock from '../../assets/clockIcon.svg'
import { useNavigate } from 'react-router'
export const TaskView = ({ item, handleOpenWork, isOpen }) => {
	const {
		id,
		title,
		author,
		description,
		due_date,
		price,
		category_title,
		hashTags,
	} = item
	const navigate = useNavigate()

	moment.locale('ru')
	const day = due_date ? moment(new Date(due_date)).format('LL') : false
	const shortName =
		author.split(' ')[0] +
		' ' +
		author.split(' ')[1][0] +
		'.' +
		author.split(' ')[2][0] +
		'.'

	return (
		<div className='w-full bg-darkmain p-3 rounded-[5px] flex flex-col gap-0.5'>
			<div className='flex flex-row items-center justify-between'>
				<div className='flex flex-row gap-2'>
					<Icon
						id={category_title}
						className='w-[23px] bg-white p-[2px] rounded-[5px] h-6'
					/>
					{hashTags.length > 0 && (
						<div className='px-2 bg-white rounded-[5px]  text-[14px] flex flex-row items-center uppercase text-gray font-bold'>
							<span className=''>{hashTags.map(el => '#' + el.title)}</span>
						</div>
					)}
				</div>

				{
					<div className='px-2 bg-white rounded-[5px]   text-right'>
						<span
							className={`text-[16px] font-bold font-main flex flex-row ${'uppercase text-blue'}`}
						>
							{price}
							<img className='w-[22px]' src={Tpoints} alt='' />
						</span>
					</div>
				}
			</div>
			<h1 className='uppercase text-white font-bold text-[16px] mt-3'>
				{title}
			</h1>
			<div className='flex flex-row items-center gap-3  justify-between'>
				<div
					className={`overflow-hidden transition-all duration-200 ease-in-out flex flex-col gap-2 ${
						isOpen ? 'max-h-96 ' : 'max-h-0'
					}`}
				>
					{
						<span
							className={`text-white text-[15px] font-normal break-words hyphens-auto ${
								!isOpen ? 'line-clamp-none' : 'line-clamp-10'
							}`}
						>
							{description}
						</span>
					}
				</div>
				{isOpen && (
					<div className='flex flex-row items-center'>
						<button
							onClick={() => {
								navigate(`../task/${id}`)
							}}
							className={`${
								isOpen ? 'bg-yellow' : 'bg-transparent'
							} h-[60px] w-15  rounded-bl-[33px] rounded-tl-[33px] relative left-[12px]`}
						>
							<span className='text-white font-bold text-3xl'>Go</span>
						</button>
					</div>
				)}
			</div>

			<div className='flex flex-row justify-between font-normal text-white'>
				<div className='px-1 py-0.5  rounded-[5px] flex items-center flex-row gap-2'>
					<img className='w-4' src={clock} alt='' />
					<span className='text-[13px]'>
						{!day ? 'не ограничего' : `До ${day}`}
					</span>
				</div>
				<div
					className={`px-1 py-0.5  rounded-[5px] flex items-center flex-row gap-2 ${
						isOpen && 'mt-2'
					}`}
				>
					<span className='text-[13px]'>Заказчик: {shortName}</span>
				</div>
			</div>
			<div
				className={`text-white flex flex-row justify-center mt-2`}
				onClick={() => handleOpenWork(id)}
			>
				<img className={`${isOpen && 'rotate-180'}`} src={arrowDown} alt='' />
			</div>
		</div>
	)
}
