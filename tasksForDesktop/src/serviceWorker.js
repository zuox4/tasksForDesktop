// serviceWorker.js

const CACHE_NAME = 'my-app-cache-v1'
const urlsToCache = [
	'/',
	'/index.html',
	'/static/js/bundle.js',
	'/static/css/main.css',
	// добавьте другие ресурсы, которые нужно кэшировать
]

// Установка Service Worker
self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			console.log('Кэширование ресурсов: ', urlsToCache)
			return cache.addAll(urlsToCache)
		})
	)
})

// Обновление кэша
self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cacheName => {
					if (cacheName !== CACHE_NAME) {
						console.log('Удаление кэша: ', cacheName)
						return caches.delete(cacheName)
					}
				})
			)
		})
	)
})

// Обработка fetch запросов
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			// Если ресурс найден в кэше, вернуть его
			return response || fetch(event.request)
		})
	)
})
