import { NavLink } from 'react-router'
export const FooterBotton = ({ path, icon }) => {
	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				`flex flex-col items-center justify-center w-10 h-8 border-b-3 ${
					isActive ? 'border-b-blue' : 'border-b-transparent'
				}`
			}
		>
			<img className={'w-[22px] h-10 pb-1'} src={icon} />
		</NavLink>
	)
}
