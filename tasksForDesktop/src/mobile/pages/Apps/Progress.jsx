export const Progress = ({ step }) => {
	return (
		<div className='flex flex-row gap-3'>
			<>
				<div
					className={`relative w-full h-2 mt-1 rounded-2xl  ${
						step > 0 ? 'bg-green' : 'bg-main'
					}`}
				></div>
				<div
					className={`relative w-full h-2 mt-1 rounded-2xl  ${
						step > 1 ? 'bg-green' : 'bg-main'
					}`}
				></div>
				<div
					className={`relative w-full h-2 mt-1 rounded-2xl  ${
						step > 2 ? 'bg-green' : 'bg-main'
					}`}
				></div>
			</>
		</div>
	)
}
