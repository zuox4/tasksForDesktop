import { Outlet } from 'react-router'
export default function Shop() {
	return (
		<div className='flex flex-col items-center w-full'>
			<Outlet />
		</div>
	)
}
