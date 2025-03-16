/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import styles from './Content.module.css'
import { EmailInput } from './EmailInput'
import { VereficationInput } from './VereficationInput'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
	checkAuth,
	login,
	loginStart,
	loginSuccess,
} from '../../features/auth/authSlice'
import { useNavigate } from 'react-router'
import { closeModal } from '../../features/modal/modalSlice'

import mainLogoIcon from '../../assets/mainLogo.svg'

export const LoginForm = ({ shadowActive }) => {
	const [email, setEmail] = useState('')
	const [vereficationCode, setVereficationCode] = useState('')
	const [buttonIsActiv, setButtonIsActive] = useState(false)
	const [emailIsValid, setEmailIsValid] = useState(false)

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { loading, error } = useSelector(state => state.auth)
	useEffect(() => {
		dispatch(checkAuth())
	}, [dispatch])
	// отправляем запрос на проверку email
	function checkEmail() {
		axios
			.post('http://127.0.0.1:8000/auth/chek_email', { email: email })
			.then(res => {
				if (res.status === 200) {
					setEmailIsValid(true)
				}
			})
			.catch(err => console.log(err))
	}

	//отправляем запрос на проверку email+code
	function sendDataForLogin() {
		const credential = {
			email: email,
			code: vereficationCode,
		}
		dispatch(login(credential, navigate))
		// const response = axios.post('http://127.0.0.1:8000/auth/login', {email: email, code: vereficationCode});
		//     response.then(res => {
		//         dispatch(loginSuccess({
		//             token: res.data.access_token,
		//             user: res.data.user // Если сервер возвращает данные пользователя
		//                 }));
	}
	return (
		<div
			className={styles.loginform}
			style={{
				boxShadow: shadowActive && '0px -1px 20px 0px rgb(109 109 109)',
				margin: shadowActive && '50px',
			}}
		>
			<img src={mainLogoIcon} alt='mainLogoItem' />
			<h1
				style={{ margin: 0, fontFamily: 'Walter Turncoat', fontWeight: '800' }}
			>
				UshachuPervachu
			</h1>
			<h1 style={{ margin: 0 }}>Вход</h1>
			<EmailInput
				setButtonIsActive={setButtonIsActive}
				setEmail={setEmail}
				email={email}
			/>
			{emailIsValid && (
				<VereficationInput
					vereficationCode={vereficationCode}
					setVereficationCode={setVereficationCode}
				/>
			)}
			{!emailIsValid && (
				<button disabled={buttonIsActiv} onClick={checkEmail}>
					Получить код
				</button>
			)}
			{emailIsValid && (
				<button
					disabled={vereficationCode.length === 8}
					onClick={sendDataForLogin}
				>
					{loading ? 'Загрузка' : 'Войти'}
				</button>
			)}
			{error && <span style={{ color: 'red' }}>{error}</span>}
		</div>
	)
}
