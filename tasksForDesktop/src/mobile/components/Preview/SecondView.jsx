import tasks from './tasks.svg'
import kpoints from './kpoints.svg'
import bigArrow from './arrow-big.svg'
import small from './arrow-mini.svg'
import school2 from './school2.svg'
export function SecondView() {
	return (
		<div className='w-full  flex flex-col justify-around mt-15 gap-10'>
			<div className=' text-white text-2xl uppercase font-bold'>
				Выбери <span className='font-bold uppercase'>Задание</span> <br />
				на свой вкус
			</div>
			<div className='flex flex-row justify-between'>
				<img src={bigArrow} className='w-15 relative left-10 top-6' />
				{/* <img src={tasks} className='w-40 relative right-0 bottom-5' /> */}
			</div>

			<div className=' text-white text-2xl uppercase text-right'>
				получи <br />
				<span className='font-bold uppercase'>Курпоинтсы</span>
			</div>
			<div className='flex w-full justify-end'>
				{/* <img src={kpoints} className='w-40  left-5 top-120' /> */}
				<img src={small} className='w-15 relative right-10' />
			</div>

			<div className=' text-white text-2xl lowercase text-left'>
				потрать <br />
				<span className='font-bold uppercase'>
					в школьном <br /> маркете
				</span>
			</div>
		</div>
	)
}
