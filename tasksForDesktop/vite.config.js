import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	assetsInclude: ['**/*.lottie', '**/*.glb'],

	server: {
		https: {
			key: './server.key', // Путь к приватному ключу
			cert: './server.crt', // Путь к сертификату
		},
		host: true,
		port: '3002',
	},
})
