export const ButtonStep = ({ onClick, children, style }) => {
	return (
		<button
			className='bg-white px-3 py-1 rounded-[5px] w-full'
			style={style}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
