import confirm from './confirm.svg'
export const ConfirmButton = ({ onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className='bg-white flex flex-row items-center gap-2 justify-between p-1 px-2 rounded-[5px] disabled:bg-gray'
		>
			<span className='uppercase font-bold text-main'>Завершить задачу</span>
			<img className={className} src={confirm} alt='' />
		</button>
	)
}
export const GetTaskButton = ({ onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className='bg-white flex flex-row items-center gap-2 justify-between p-1 px-2 rounded-[5px] disabled:bg-gray'
		>
			<span className='uppercase font-bold text-main'>Завершить задачу</span>
			<img className={className} src={confirm} alt='' />
		</button>
	)
}
