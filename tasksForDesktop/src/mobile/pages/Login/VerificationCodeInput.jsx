import { useState, useRef, useEffect } from 'react'

const VerificationCodeInput = ({ length = 6, onComplete }) => {
	const [code, setCode] = useState(Array(length).fill(''))
	const inputs = useRef([])

	// Фокус на первое поле при монтировании
	useEffect(() => {
		if (inputs.current[0]) {
			inputs.current[0].focus()
		}
	}, [])

	const handleChange = (index, value) => {
		// Разрешаем только цифры
		if (!/^[0-9]$/.test(value) && value !== '') return

		const newCode = [...code]
		newCode[index] = value
		setCode(newCode)

		// Автоматический переход к следующему полю
		if (value !== '' && index < length - 1) {
			inputs.current[index + 1].focus()
		}

		// Если все поля заполнены - вызываем колбэк
		if (newCode.every(num => num !== '') && onComplete) {
			onComplete(newCode.join(''))
		}
	}

	const handleKeyDown = (index, e) => {
		// Обработка Backspace
		if (e.key === 'Backspace' && code[index] === '' && index > 0) {
			inputs.current[index - 1].focus()
		}
	}

	const handlePaste = e => {
		e.preventDefault()
		const pastedData = e.clipboardData.getData('text/plain').slice(0, length)
		if (/^\d+$/.test(pastedData)) {
			const newCode = pastedData.split('').slice(0, length)
			setCode(newCode)
			if (onComplete && newCode.length === length) {
				onComplete(newCode.join(''))
			}
		}
	}

	return (
		<div className='flex gap-2 justify-center'>
			{code.map((digit, index) => (
				<input
					key={index}
					type='text'
					inputMode='numeric'
					maxLength='1'
					value={digit}
					ref={el => (inputs.current[index] = el)}
					onChange={e => handleChange(index, e.target.value)}
					onKeyDown={e => handleKeyDown(index, e)}
					onPaste={handlePaste}
					className='w-full h-10 text-2xl text-center border-2 border-white rounded 
                     focus:border-blue-500 outline-none bg-white transition-all'
				/>
			))}
		</div>
	)
}

export default VerificationCodeInput
