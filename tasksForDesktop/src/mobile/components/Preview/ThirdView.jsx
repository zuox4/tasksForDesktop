import pannel from './reiting-panel.svg'
export function ThirdView() {
	return (
		<div className='mt-15'>
			<h1 className='uppercase fomt-bold text-2xl'>Хочешь больше?</h1>
			<img src={pannel} alt='' className='mt-10 z-10' />
			<div className='w-full flex justify-end mt-10'>
				<h1 className='w-10uppercase fomt-bold text-2xl text-right'>
					Подними свой рейтинг доверия
				</h1>
			</div>
			<h1 className='uppercase fomt-bold text-2xl absolute text-right right-3 bottom-10 mt-10'>
				Получай доступ к закрытым заданиям
			</h1>
		</div>
	)
}
