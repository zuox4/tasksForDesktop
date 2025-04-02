import like from '../../assets/like.svg'
export const ResultPanel = ({ item, name }) => {
	return (
		<div className='flex flex-col items-center gap-3'>
			<div className='p-3 bg-darkmain rounded-[10px] flex flex-col items-center gap-3 w-full'>
				<img className='w-9' src={item?.icon || like} />
				<span className='text-white font-bold text-2xl uppercase leading-none w-full text-center overflow-hidden'>
					{item ? item.value : '...'}
				</span>
			</div>
			<span className='text-center text-white font-normal text-[14px] '>
				{name}
			</span>
		</div>
	)
}
