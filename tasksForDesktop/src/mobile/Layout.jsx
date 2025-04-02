import { Outlet } from 'react-router'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { useSelector } from 'react-redux'
import { Preview } from './components/Preview/Preview'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadProfileData } from '../features/playerProfile/playerProfileSlice'
export default function Layout({ children }) {
	const preview = useSelector(state => state.preview.value)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadProfileData())
	}, [])
	return (
		<>
			{preview && <Preview />}
			<Header />
			<div className='mt-25 w-full flex flex-col items-center px-4 mb-[100px]'>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}
