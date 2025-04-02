import { ProgressBar } from 'react-aria-components'
export const LevelProgress = ({ level, current, max, progress, score }) => {
	return (
		<div>
			<span className='uppercase text-white font-black'>{level} уровень</span>
			<div className='relative w-full h-9 mt-1 bg-white overflow-hidden'>
				<div
					className={`h-full bg-blue`}
					style={{
						width: `${(current % 1000) / 10 + 3}%`,
					}}
				></div>

				<div className='text-main absolute inset-0 flex items-center justify-end mr-3 text-sm font-medium text-gray-800'>
					{progress} / {max}
				</div>
			</div>
		</div>
	)
}
