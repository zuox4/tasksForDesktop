import { useRef, useEffect } from 'react'
export const AnimationController = ({ children, animate }) => {
	const ref = useRef(null)

	useEffect(() => {
		if (ref.current && animate) {
			const element = ref.current
			element.style.transition = 'opacity 0.5s'
			element.style.opacity = '0'

			requestAnimationFrame(() => {
				element.style.opacity = '1'
			})
		}
	}, [animate])

	return <div ref={ref}>{children}</div>
}
