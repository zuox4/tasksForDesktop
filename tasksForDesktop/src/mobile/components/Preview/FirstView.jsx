import maket from './school.svg'
export function FirstView() {
	return (
		<div className={`mt-15 `}>
			<div className='font-bold text-2xl'>
				<h1>
					<span className='text-4xl font-bold'>Ш</span>кольный{' '}
					<span className='text-4xl'>М</span>ногофункциональный{' '}
					<span className='text-4xl'>С</span>ервис{' '}
				</h1>
			</div>
			<div className='w-[600px] absolute  bottom-10 uppercase text-white text-2xl right-2 '>
				<div className='text-right text-2xl'>
					Зарабатывай
					<br /> и трать не выходя <br />
					из школы
				</div>
			</div>
		</div>
	)
}
