import { StepButton } from '@mui/material'
import { useState } from 'react'
export const SecondStep = ({ save, setValueValute }) => {
	const [nameValute, setNameValute] = useState('')
	const saveValute = () => {
		save(nameValute)
		console.log(nameValute)
	}
	return (
		<>
			<span className='text-lg text-white font-bold'>
				Предложи название общешкольной школьной валюте
			</span>
			<div className='flex flex-row gap-4'>
				<input
					type='search'
					min={5}
					max={10}
					className='bg-white p-2 w-full rounded-[5px] text-center'
					placeholder='Предложи название'
					value={nameValute}
					onChange={e => {
						setValueValute(e.target.value)
						setNameValute(e.target.value)
					}}
				/>
				<button
					className='bg-white px-3 py-1 rounded-[5px] disabled:text-gray'
					onClick={saveValute}
					disabled={nameValute.length < 6}
				>
					Сохранить
				</button>
			</div>
		</>
	)
}
