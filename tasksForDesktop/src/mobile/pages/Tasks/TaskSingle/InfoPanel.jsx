export const InfoPanel = ({ text, children }) => {
	return (
		<div className='bg-white text-[15px] font-bold uppercase px-1  rounded-[5px] text-main flex flex-row items-center gap-1 w-fit'>
			{children}
			<span className='relative top-0.5'>{text}</span>
		</div>
	)
}
