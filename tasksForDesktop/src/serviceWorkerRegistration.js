// serviceWorkerRegistration.js

const register = config => {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			const swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`

			navigator.serviceWorker
				.register(swUrl)
				.then(registration => {
					console.log('Service Worker зарегистрирован: ', registration)
					if (registration.waiting) {
						// Обновление Service Worker
						console.log('Новый Service Worker найден. Он должен быть обновлён!')
					}
					return registration
				})
				.catch(error => {
					console.error('Ошибка при регистрации Service Worker: ', error)
				})
		})
	}
}

export { register }
