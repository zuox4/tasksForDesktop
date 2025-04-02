import './App.css'

import { useSelector } from 'react-redux'
import { Link, Navigate, Outlet } from 'react-router'
import { Route, Routes } from 'react-router-dom'
import { ModaConteiner } from './components/ModalConteiner'
import Login from './mobile/pages/Login/Login'
import { Layout } from './mobile/Layout'
import { Profile } from './mobile/pages/Profile/Profile'
import { Apps } from './mobile/pages/Apps/Apps'
import { Tasks } from './mobile/pages/Tasks/Tasks'
import { DashTasks } from './mobile/pages/Tasks/DashTasks'
import { DashCategories } from './mobile/pages/Tasks/DashCategories'

function App() {
	const { user } = useSelector(state => state.auth)
	// console.log(user.isActive)
	return (
		<>
			<ModaConteiner />
			<Outlet />
		</>
	)
}

export default App
