export const ActionButton = ({
	className,
	onClick,
	text,
	srcIcon,
	children,
	disabled,
}) => {
	return (
		<button
			onClick={onClick}
			className='bg-white flex flex-row items-center gap-2 justify-between p-1 px-2 rounded-[5px] disabled:bg-gray'
		>
			<span className='uppercase font-bold text-main'>{text}</span>
			<img className={className} src={srcIcon} alt='' />
			{children}
		</button>
	)
}
