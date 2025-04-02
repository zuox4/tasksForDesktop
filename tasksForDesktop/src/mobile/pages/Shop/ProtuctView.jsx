import { useSelect } from '@react-three/drei'
import { ModalBuyProduct } from '../../components/ModalBuyProduct'
import { useState } from 'react'
export function ProductCard({ item, onClick }) {
	const { id, title, description, url_src, price } = item

	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			{isOpen && (
				<ModalBuyProduct item={item} setIsOpen={setIsOpen} isOpen={isOpen} />
			)}
			<div className='w-min  flex flex-col  rounded-2xl p-2  shadow-2xl '>
				<div className='w-38 h-35 flex flex-col items-center justify-center rounded-2xl bg-white p-1'>
					<img className='min-h-full' src={url_src} alt='' />
				</div>
				<span className='text-white uppercase font-bold text-lg text-left truncate ... mt-2'>
					{price} Kpoints
				</span>

				<>
					<div className='w-full flex flex-col'>
						<span className='line-clamp-2 text-white'>{title}</span>
					</div>
					<button
						className='px-2 py-1 bg-blue rounded-[5px] mt-1'
						onClick={() => setIsOpen(true)}
					>
						<span className='text-white uppercase'>Обменять</span>
					</button>
				</>
			</div>
		</>
	)
}
