import React, { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router'
import ProtectedRoute from './ProtectedRoute'
import { CircularProgress } from '@mui/material'

// Ленивая загрузка компонентов
const Layout = lazy(() => import('../Layout'))
const Profile = lazy(() => import('../pages/Profile/Profile'))
const Tasks = lazy(() => import('../pages/Tasks/Tasks'))
const DashCategories = lazy(() => import('../pages/Tasks/DashCategories'))
const DashTasks = lazy(() => import('../pages/Tasks/DashTasks'))
const TaskSingle = lazy(() => import('../pages/Tasks/TaskSingle/TaskSingle'))
const MyTasks = lazy(() => import('../pages/Tasks/MyTasks/MyTasks'))
const MyProducts = lazy(() => import('../pages/Shop/MyProducts/MyProducts'))
const Apps = lazy(() => import('../pages/Apps/Apps'))
const CategoriesList = lazy(() => import('../pages/Shop/CategoriesShopDash'))
const Shop = lazy(() => import('../pages/Shop/Shop'))
const WorkerPage = lazy(() => import('../pages/Worker/WorkerPage'))
const NewTask = lazy(() => import('../pages/Worker/NewTask'))
const Login = lazy(() => import('../pages/Login/Login'))
const FileUploader = lazy(() => import('../FileUploader'))

// Функция для оборачивания компонентов в Suspense
const withSuspense = component => (
	<Suspense
		fallback={
			<div className='w-full flex flex-col items-center justify-center mt-50'>
				<CircularProgress />
			</div>
		}
	>
		{component}
	</Suspense>
)

// Функция для создания защищенного маршрута
const withProtectedRoute = component => (
	<ProtectedRoute>{withSuspense(component)}</ProtectedRoute>
)

// Основная конфигурация маршрутов
export const router = createBrowserRouter([
	{
		path: '/', // Главный путь
		element: withSuspense(<Layout />),
		children: [
			{
				index: true, // Корневой маршрут
				element: withProtectedRoute(<Profile />),
			},
			{
				path: 'tasks', // Задачи
				element: withProtectedRoute(<Tasks />),
				children: [
					{
						index: true, // Список категорий задач
						element: withProtectedRoute(<DashCategories />),
					},
					{
						path: ':id', // Подробности задачи
						element: withProtectedRoute(<DashTasks />),
					},
					{
						path: 'task/:id', // Отдельная задача
						element: withProtectedRoute(<TaskSingle />),
					},
				],
			},
			{
				path: 'my-tasks', // Мои задачи
				element: withProtectedRoute(<MyTasks />),
			},
			{
				path: 'my-products', // Продукты пользователя
				element: withProtectedRoute(<MyProducts />),
			},
			{
				path: 'fast-bonus', // Быстрый доступ к бонусам
				element: withProtectedRoute(<Apps />),
			},
			{
				path: 'calendar', // Календарь
				element: <div>Календарь</div>,
			},
			{
				path: 'worker-panel', // Панель сотрудников
				element: withProtectedRoute(<WorkerPage />),
				children: [
					{
						index: true, // Новый таск для сотрудников
						element: withProtectedRoute(<NewTask />),
					},
					{
						path: 'my-tasks',
						element: <div>Заданные задания</div>, // Пример текста
					},
				],
			},
			{
				path: 'shop', // Магазин
				element: withProtectedRoute(<Shop />),
				children: [
					{
						index: true, // Список категорий
						element: withProtectedRoute(<CategoriesList />),
					},
				],
			},
		],
	},
	{
		path: '/login', // Логин
		element: withSuspense(<Login />),
	},
	{
		path: '/loader', // Загрузка файлов
		element: withSuspense(<FileUploader />),
	},
])
