import { MenuProfile } from './MenuProfile/MenuProfile'
import KPoints from '../../assets/logoKpoint.svg'
import { useSelector } from 'react-redux'

export const Header = () => {
	return (
		<div className='h-auto top-0 py-2 w-full bg-white px-2 flex flex-row items-center justify-between fixed z-99'>
			<div className='flex gap-2 items-center'>
				<img className='w-25' src={KPoints} alt='' />
			</div>

			<MenuProfile />
		</div>
	)
}
