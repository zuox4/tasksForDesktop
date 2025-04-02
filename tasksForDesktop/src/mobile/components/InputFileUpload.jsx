import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
})
export default function InputFileUpload({ handleFileChange, title }) {
	return (
		<Button
			style={{
				fontSize: '12px',

				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
			component='label'
			role={undefined}
			variant='contained'
			tabIndex={-1}
		>
			{title}
			<VisuallyHiddenInput type='file' onChange={handleFileChange} multiple />
		</Button>
	)
}
