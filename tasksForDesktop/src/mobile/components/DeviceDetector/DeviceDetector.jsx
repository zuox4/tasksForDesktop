import { useState, useEffect } from 'react'

const MobileDetector = ({ children }) => {
	const [isMobile, setIsMobile] = useState(null)
	const [isPWA, setIsPWA] = useState(false)

	useEffect(() => {
		const checkDevice = () => {
			// Проверка мобильного устройства
			const userAgent = navigator.userAgent
			const isMobileDevice =
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					userAgent
				)
			setIsMobile(isMobileDevice)

			// Проверка PWA
			const isStandalone = window.matchMedia(
				'(display-mode: standalone)'
			).matches
			const isIOSPWA = window.navigator.standalone
			const isInstalled = localStorage.getItem('pwa-installed') === 'true'

			setIsPWA(isStandalone || isIOSPWA || isInstalled)
		}

		// Обработчик перед установкой PWA
		const beforeInstallHandler = e => {
			e.preventDefault()
			localStorage.setItem('pwa-installed', 'true')
			setIsPWA(true)
		}

		checkDevice()
		window.addEventListener('beforeinstallprompt', beforeInstallHandler)

		return () => {
			window.removeEventListener('beforeinstallprompt', beforeInstallHandler)
		}
	}, [])

	if (isMobile === null) return null

	if (!isMobile) {
		return (
			<div style={styles.container}>
				<h1 style={styles.title}>🚫 Доступ запрещен</h1>
				<p style={styles.text}>
					Этот сайт доступен только с мобильных устройств.
				</p>
			</div>
		)
	}

	if (!isPWA) {
		return (
			<div style={styles.container}>
				<h1 style={styles.title}>📲 Установите приложение</h1>
				<p style={styles.text}>
					Для наилучшего опыта, пожалуйста, добавьте это веб-приложение на ваш
					домашний экран:
				</p>
				<div style={styles.instructions}>
					<p>1. Нажмите кнопку "Поделиться"</p>
					<p>2. Выберите "На экран «Домой»"</p>
					<p>3. Запускайте как обычное приложение</p>
				</div>
			</div>
		)
	}

	return children
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
		textAlign: 'center',
		padding: '20px',
		backgroundColor: '#f0f4f8',
	},
	title: {
		fontSize: '24px',
		marginBottom: '20px',
		color: '#2d3748',
	},
	text: {
		fontSize: '18px',
		color: '#4a5568',
		maxWidth: '500px',
		marginBottom: '30px',
	},
	instructions: {
		backgroundColor: 'white',
		padding: '20px',
		borderRadius: '12px',
		boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
		textAlign: 'left',
	},
}

export default MobileDetector
