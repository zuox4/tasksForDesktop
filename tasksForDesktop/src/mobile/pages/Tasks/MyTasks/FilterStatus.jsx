import { useState } from 'react'

export function FilterStatus({ filter, setFilter }) {
	const statuses = ['Текущие', 'Завершенные']

	return (
		<div className='w-full flex gap-9 justify-center'>
			<span
				onClick={() => setFilter('current')}
				className={`uppercase ${
					filter === 'current' && 'border-b-2 text-white'
				} text-gray`}
			>
				Текущие
			</span>
			<span
				className={`uppercase ${
					filter === 'completed' && 'border-b-2 text-white'
				} text-gray`}
				onClick={() => setFilter('completed')}
			>
				Завершенные
			</span>
		</div>
	)
}
