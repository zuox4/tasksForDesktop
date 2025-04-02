import { useState } from 'react'
import TPoints from '../../assets/Kpoints.svg'
import clock from '../../assets/clockIcon.svg'
import inviteIcon from '../../assets/invite.svg'
export const InviteComponent = () => {
	const [copied, setCopied] = useState(false)
	return (
		<div className='w-full mt-3 p-3 bg-darkmain rounded-2xl flex flex-col gap-2'>
			<span className='text-lg text-white font-bold uppercase'>
				{'Пришласи друга'}
			</span>
			<div className='w-full bg-blue h-[4px]'></div>
			<div className='flex flex-row items-center justify-between gap-2'>
				<span className='text-white '>
					{
						'Поделись кодом дружбы. При регистраци друга с этим кодом вы получите по 300 Курпоинтов'
					}
				</span>
				<img className={'w-22'} src={inviteIcon} alt='' />
			</div>

			<div className='text-lg uppercase font-bold text-gray w-full text-center disabled flex gap-1'>
				<div className='text-lg'>Код дружбы:</div>
				<div
					className='cursor-pointer hover:text-blue-500 transition-colors duration-200'
					onClick={() => {
						navigator.clipboard
							.writeText('12332131')
							.then(() => {
								setCopied(true)
								setTimeout(() => setCopied(false), 2000)
							})
							.catch(err => console.error('Ошибка копирования:', err))
					}}
				>
					12332131
					{copied && (
						<span className='text-[10px] text-green-500 ml-2'>
							Скопировано!
						</span>
					)}
				</div>
			</div>

			<div className='flex flex-row justify-between font-normal text-white'>
				<div className='px-1 py-0.5  rounded-[5px] flex items-center flex-row gap-2'>
					<img className='w-4' src={clock} alt='' />
					<span className='text-[13px]'>Не ограничено</span>
				</div>
				<div className='px-2 bg-white rounded-[5px]   text-right'>
					<span
						className={`text-[16px] font-bold font-main flex flex-row ${'uppercase text-blue'}`}
					>
						{300}
						<img className='w-[22px]' src={TPoints} alt='' />
					</span>
				</div>
			</div>
		</div>
	)
}
