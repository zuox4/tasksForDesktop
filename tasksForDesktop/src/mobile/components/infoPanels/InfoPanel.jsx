export const InfoPanel = ({ title }) => {
	return (
		<div
			className='bg-white px-2 py-0.5 rounded-[5px]  text-[16px] flex flex-col items-center'
			style={{ fontFamily: 'Codec-Pro' }}
		>
			<span className='uppercase font-bold'>{title}</span>
		</div>
	)
}
