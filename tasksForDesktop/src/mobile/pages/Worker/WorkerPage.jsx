import { Outlet, Link } from 'react-router'
export default function WorkerPage() {
	return (
		<div className='w-full'>
			<h1>Панель администратора заданий</h1>
			<div className='w-full flex flex-row justify-between'>
				<Link to={'my-tasks'}>Заданные задания</Link>
				<Link to={''}>Задать задание</Link>
			</div>

			<Outlet></Outlet>
		</div>
	)
}
