import { CircularProgress } from '@mui/material'
import api from '../../../api/api'
import { ProductCard } from './ProtuctView'
import { useState, useEffect } from 'react'
export function ProductList({ categoryFilter, id }) {
	const [isLoading, setIsLoading] = useState(true)
	const [productList, setProductList] = useState([])
	const [error, setError] = useState('')
	const loadProducts = async name => {
		try {
			setIsLoading(true)
			const { data } = await api.get(`/shop/categories/${name}`)
			console.log(data.data)
			setProductList(data.data)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
			setError('Что то пошло не так')
		} finally {
			setIsLoading(false)
		}
	}
	useEffect(() => {
		loadProducts(id)
	}, [id])
	if (isLoading) return <CircularProgress />
	return (
		<div className='w-full flex flex-wrap gap-4 justify-between '>
			{productList.length > 0 ? (
				productList.map(product => (
					<ProductCard key={product.id} item={product} />
				))
			) : (
				<span className='w-full text-center uppercase text-gray'>
					Нет доступных товаров
				</span>
			)}
			<span>{error}</span>
		</div>
	)
}
