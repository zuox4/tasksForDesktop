import { LoaderProgress } from './loadPlogress'

export function HeaderPreview({ numberView, setNumberView }) {
	return (
		<div className='w-full h-10 mt-3 flex items-center justify-between'>
			{[1, 2, 3, 4].map((_, index) => (
				<div
					key={index}
					className={`${
						index < numberView - 1 ? 'bg-blue' : 'bg-gray'
					} h-2 w-20 rounded-2xl relative`}
				>
					{index + 1 === numberView && (
						<LoaderProgress
							openProgress={numberView}
							setOpenProgress={setNumberView}
						/>
					)}
				</div>
			))}
		</div>
	)
}
