import { ProductList } from './ProductList'

export default function MyProducts() {
	return (
		<div className='w-full'>
			<h1 className='text-2xl text-center'>Мои покупки</h1>
			<ProductList />
		</div>
	)
}
