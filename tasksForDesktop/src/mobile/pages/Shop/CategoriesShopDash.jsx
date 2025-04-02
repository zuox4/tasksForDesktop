import { useEffect, useState } from 'react'
import { CategoryView } from './CategoryView'
import { CircularProgress } from '@mui/material'
import api from '../../../api/api'
import { ProductList } from './ProductList'
import { ModalBuyProduct } from '../../components/ModalBuyProduct'
export default function CategoriesList() {
	const [categoriesList, setCategoriesList] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [categoryFilter, setCategoryFilter] = useState({})

	const loadCategory = async () => {
		setIsLoading(true)
		try {
			const { data = {} } = await api.get('/shop/categories')
			console.log(data)
			setCategoriesList(data.data)
			setCategoryFilter(data.data[0])
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		loadCategory()
	}, [])
	if (isLoading) return <CircularProgress />

	return (
		<>
			<div className='w-full flex flex-col items-center  bg-white fixed z-10 top-15 mt-0 rounded-b-3xl'>
				{/* <h1 className='center text-xl mt-5'>категории</h1> */}
				<div className='w-full flex gap-3 overflow-auto scroll-auto mt-4 px-2 mb-5'>
					{categoriesList.length > 0 ? (
						categoriesList.map(category => (
							<CategoryView
								categoryFilter={categoryFilter.id}
								key={category.id}
								iconUrl={category.iconUrl}
								title={category.title}
								id={category.id}
								setCategoryFilter={setCategoryFilter}
							></CategoryView>
						))
					) : (
						<span className='uppercase text-xl text-gray text-center'>
							Нет доступных товаров
						</span>
					)}
				</div>
				{/* <h1 className='center text-xl mt-2 mb-3 '>Канцелярия</h1> */}
			</div>
			<div className={`w-full flex flex-col items-center gap-3 mt-30`}>
				<h1 className='text-center text-xl mt-2'>{categoryFilter.title}</h1>
				<ProductList categoryFilter={categoryFilter} id={categoryFilter.id} />
			</div>
		</>
	)
}
