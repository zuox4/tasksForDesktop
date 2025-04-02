import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './app/store.js'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import '../src/mobile/fonts.css'
import './index.css'
import { router } from './mobile/routes/myRoutes.jsx'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import MobileDetector from './mobile/components/DeviceDetector/DeviceDetector.jsx'

createRoot(document.getElementById('root')).render(
	// <StrictMode>
	<Provider store={store}>
		{/* <MobileDetector> */}
		<RouterProvider router={router} />
		{/* </MobileDetector> */}
	</Provider>
	// </StrictMode>
)
serviceWorkerRegistration.register()
