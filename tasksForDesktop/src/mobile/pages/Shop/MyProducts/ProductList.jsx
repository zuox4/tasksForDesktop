import { useEffect, useState } from 'react'
import { ProductCart } from './ProductCart'
import api from '../../../../api/api'
import { CircularProgress } from '@mui/material'
export function ProductList() {
	const [filter, setFilter] = useState('ожидает получения')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [myProductList, setMyProductList] = useState([])
	const loadMyProductList = async () => {
		setIsLoading(true)
		try {
			const { data } = await api.get('/shop/my-products')
			console.log(data)
			setMyProductList(data)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
			setError('Ошибка получения')
		}
	}
	useEffect(() => {
		loadMyProductList()
	}, [])
	if (isLoading) return <CircularProgress />
	return (
		<div className='w-full flex flex-col gap-4 mt-3'>
			<div className='flex gap-1 w-full justify-between'>
				<button
					onClick={() => setFilter('ожидает получения')}
					className={`${
						filter === 'ожидает получения' && 'bg-white font-bold text-main'
					} px-3 py-1 rounded-[5px] uppercase text-[15px] text-gray`}
				>
					Ожидают получения
				</button>
				<button
					onClick={() => setFilter('выдан')}
					className={`${
						filter === 'выдан' && 'bg-white font-bold text-main'
					} px-3 py-1 rounded-[5px] uppercase text-[15px] text-gray`}
				>
					Полученные
				</button>
			</div>
			{myProductList
				.filter(product => product.status === filter)
				.map(product => (
					<ProductCart key={product.title} item={product} />
				))}
		</div>
	)
}
