import { useState } from 'react'
import clock from '../../assets/clockIcon.svg'
import TPoints from '../../assets/Kpoints.svg'
export const KonkursValute = ({
	titleTask,
	description,
	due_date,
	price,
	status,
}) => {
	const [nameValute, setNameValute] = useState('')
	return (
		<div className='w-full p-3 bg-darkmain rounded-2xl flex flex-col gap-2'>
			<span className='text-lg text-white font-bold uppercase'>
				{titleTask}
			</span>
			<div className='w-full bg-blue h-[4px]'></div>
			<div className='flex flex-row items-center justify-between gap-2'>
				<span className='text-white'>{description}</span>
				<img className={'w-15'} src={TPoints} alt='' />
			</div>

			{status ? (
				<div className='text-lg uppercase font-bold text-gray w-full text-center disabled'>
					<span>Выполнено</span>
				</div>
			) : (
				<>
					<div className='flex flex-row gap-4'>
						<input
							type='search'
							min={5}
							max={10}
							className='bg-white p-2 w-full rounded-[5px] text-center'
							placeholder='Предложи название'
							value={nameValute}
							onChange={e => {
								setNameValute(e.target.value)
							}}
						/>
						{nameValute.length > 3 && (
							<button
								onClick={() => setNameValute('')}
								className='bg-white px-3 py-1 rounded-[5px] disabled:text-gray'
								disabled={nameValute.length < 6}
							>
								Учавствовать
							</button>
						)}
					</div>
				</>
			)}
			<div className='flex flex-row justify-between font-normal text-white'>
				<div className='px-1 py-0.5  rounded-[5px] flex items-center flex-row gap-2'>
					<img className='w-4' src={clock} alt='' />
					<span className='text-[13px]'>до {'day'}</span>
				</div>
				<div className='px-2 bg-white rounded-[5px]   text-right'>
					<span
						className={`text-[16px] font-bold font-main flex flex-row ${'uppercase text-blue'}`}
					>
						{price}
						<img className='w-[22px]' src={TPoints} alt='' />
					</span>
				</div>
			</div>
		</div>
	)
}
