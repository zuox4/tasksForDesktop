import { useState } from 'react'
import InputFileUpload from './components/InputFileUpload'
import { CircularProgress } from '@mui/material'

const FileUploader = () => {
	const [file, setFile] = useState(null)
	const [preview, setPreview] = useState('')
	const [uploading, setUploading] = useState(false)
	const [resultUrl, setResultUrl] = useState('')
	const [message, setMessage] = useState('')
	const handleFileChange = e => {
		const selectedFile = e.target.files[0]
		if (selectedFile) {
			setFile(selectedFile)
			setPreview(URL.createObjectURL(selectedFile))
		}
	}
	const deleted = () => {
		setPreview('')
		setUploading(false)
		setFile(null)
		setResultUrl('')
	}
	const handleUpload = async () => {
		if (!file) return

		setUploading(true)
		const formData = new FormData()
		formData.append('file', file)

		try {
			const response = await fetch('http://127.0.0.1:8000/uploads/upload', {
				method: 'POST',
				body: formData,
			})

			if (!response.ok) {
				throw new Error('Upload failed')
			}

			const data = await response.json()
			setMessage('Успешно')
		} catch (error) {
			console.error('Upload error:', error)
			alert(error.message)
		} finally {
			setUploading(false)
		}
	}

	return (
		<div className='file-uploader flex flex-col items-center gap-2.5'>
			<img src={preview} className='w-20' />
			<div className='flex justify-between gap-2.5'>
				<InputFileUpload
					handleFileChange={handleFileChange}
					title={'Загрузить'}
				/>
				{file && (
					<>
						<button onClick={handleUpload} className='bg-blue text-white p-1'>
							Отправить
						</button>

						<button onClick={deleted} className='bg-blue text-white p-1'>
							Очистить
						</button>
					</>
				)}
			</div>
			<span className='text-white'>
				{uploading ? (
					<CircularProgress className='w-5' />
				) : (
					message && 'успешно'
				)}
			</span>
		</div>
	)
}

export default FileUploader
