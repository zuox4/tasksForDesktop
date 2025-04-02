import { useEffect, useState } from 'react'

export function LoaderProgress({ openProgress, setOpenProgress }) {
	const [progress, setProgress] = useState(6)
	useEffect(() => {
		// Устанавливаем интервал
		const interval = setInterval(() => {
			setProgress(prevProgress => {
				// Увеличиваем прогресс на 0.02
				const newProgress = prevProgress + 0.1
				// Если прогресс достигает или превышает 100, очищаем интервал и возвращаем 100
				if (newProgress >= 100) {
					clearInterval(interval)
					console.log('Отключил')

					return 100
				}

				return newProgress
			})
		}, 1) // Обновляем прогресс каждую миллисекунду

		// Очищаем интервал при размонтировании компонента
		return () => clearInterval(interval)
	}, [])
	useEffect(() => {
		if (progress == 100) {
			setOpenProgress(prev => prev + 1)
		}
	}, [progress])
	return (
		<div
			className='bg-blue h-2 rounded-2xl'
			style={{ width: `${progress}%` }}
		></div>
	)
}
