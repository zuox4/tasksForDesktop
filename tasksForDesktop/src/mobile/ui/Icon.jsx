import categoryIcons from '../assets/icons/icons-sprite.svg'

// 2. Модифицируем компонент Icon
export const Icon = ({ id, className }) => {
	return (
		<svg className={className}>
			<use href={categoryIcons + '#icon-category-' + id}></use>
		</svg>
	)
}
