import './App.css'
import Login from './pages/Login'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Shop } from './pages/Shop'

import { MainLayer } from './components/MainLayer'
import { Tasks } from './pages/Tasks'
import { MyPurchaseHistory } from './pages/MyPurchaseHistory'
import { ModaConteiner } from './components/ModalConteiner'
import { PlayerPanel } from './components/Panels/Player'
import { WorkerPanel } from './components/Panels/WorkerPanel/WorkerPanel'
import { AdminPanel } from './components/Panels/AdminPanel'
import { WorkerHome } from './components/Panels/WorkerPanel/Home'

function App() {
	const { user } = useSelector(state => state.auth)
	return (
		<>
			<ModaConteiner />
			<Routes>
				<Route
					path='/'
					element={user ? <MainLayer /> : <Navigate to='login' />}
				>
					<Route path='/player' element={<PlayerPanel />}>
						<Route path='home' index element={<Home />} />
						<Route path='shop' element={<Shop />} />
						<Route path='tasks' element={<Tasks />} />
						<Route path='calendar' element={<Shop />} />
						<Route path='orders' element={<MyPurchaseHistory />} />
					</Route>

					<Route path='/worker' element={<WorkerPanel />}>
						<Route path='home' element={<WorkerHome />} />
					</Route>

					<Route path='/admin' element={<AdminPanel />}>
						<Route path='home' element={<div>Админ хоме</div>} />
					</Route>
				</Route>
				<Route path='/login' element={<Login />} />
				{/* <Route path='/*' element={<Navigate to={'/player/home'} />} /> */}
			</Routes>
		</>
	)
}

export default App
