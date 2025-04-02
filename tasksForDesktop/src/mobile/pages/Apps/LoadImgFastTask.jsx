import FileUploader from '../../FileUploader'
import { useEffect, useState } from 'react'
import api from '../../../api/api'
export const LoadImgFastTask = ({ id }) => {
	const [isActive, setAcive] = useState(false)
	const title = 'Хуета'
	const description = 'Хуета'

	// const loadFastDask = id => {
	// 	const task = api.get(`/fast-tasks/${id}`)
	// }

	// useEffect(() => {
	// 	loadFastDask(id)
	// }, [])
	return (
		<div className='w-full p-3 bg-darkmain rounded-2xl flex flex-col gap-2'>
			<span className='text-lg text-white font-bold'>{title}</span>
			<div className='w-full bg-blue h-[4px]'></div>
			<div className='flex flex-row items-center text-white justify-between'>
				{description}
			</div>
			{isActive ? <FileUploader /> : 'Задача завершена'}
		</div>
	)
}
