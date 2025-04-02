import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
export default function ProtectedRoute({ children }) {
	const { user } = useSelector(state => state.auth)
	return user ? children : <Navigate to='/login' replace />
}
