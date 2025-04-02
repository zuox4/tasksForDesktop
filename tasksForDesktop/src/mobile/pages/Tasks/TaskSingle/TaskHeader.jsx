import { InfoPanel } from './InfoPanel'
import { Icon } from '../../../ui/Icon'
export const TaskHeader = ({ taskMainInfo }) => {
	const {
		title,
		description,
		categoryTitle,
		author,
		dueDate,
		price,
		requiresApproval,
	} = taskMainInfo

	const approve = requiresApproval
		? 'Требует согласования'
		: 'Не ребует согласования'
	const priceValue = price + 'курпоинтов'
	return (
		<>
			<section className='flex flex-col gap-1'>
				<h1 className='font-bold text-2xl'>{title}</h1>
				<span className='text-white uppercase font-bold underline '>
					Описание задачи
				</span>
				<span className='uppercase text-lg text-white text-[15px] text-justify	'>
					{description}
				</span>
			</section>

			<section className='bg-darkmain rounded-[10px] w-full px-2 py-2 flex gap-3 flex-wrap'>
				<InfoPanel text={categoryTitle}>
					<Icon
						id={categoryTitle}
						className='w-5   rounded-[5px] inset-shadow-sm h-5 '
					/>
				</InfoPanel>
				<InfoPanel text={priceValue} />
				<InfoPanel text={author} />
				<InfoPanel text={approve} />
				<div className='bg-white text-[15px] font-bold uppercase px-1  rounded-[5px] text-main flex flex-row items-center gap-1 w-fit'>
					<span className='relative top-0.5'>{dueDate || 'без срока'}</span>
				</div>
			</section>
		</>
	)
}
