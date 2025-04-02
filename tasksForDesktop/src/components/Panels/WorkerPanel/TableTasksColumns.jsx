import DeleteIcon from '@mui/icons-material/Delete'
import { TableCell } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Button from '@mui/material/Button'
export const columns = [
	{
		field: 'title',
		headerName: 'Название',
		width: 250,
		editable: false,
	},
	{
		field: 'price',
		headerName: 'Цена',
		type: 'number',
		width: 100,
		editable: false,
	},
	{
		field: 'requires_approval',
		headerName: 'Требует подтверждения',
		type: 'boolean',
		width: 110,
		editable: false,
	},
	{
		field: 'created_at',
		headerName: 'Дата и время создания',
		type: 'text',
		width: 170,
		editable: false,
	},
	{
		field: 'due_date',
		headerName: 'Дата и время завершения',
		type: 'text',

		width: 170,
		editable: '',
	},
	{
		field: 'status',
		headerName: '',
		width: 150,
		renderCell: params => (
			<div
				style={{
					color: params.row.status === 'open' ? 'green' : 'red',
					fontWeight: 700,
					textTransform: 'uppercase',
					textAlign: 'center',
				}}
				onClick={() => console.log(params.row.id)}
			>
				{params.row.status}
			</div>
		),
	},
	{
		field: 'actionstatus',
		headerName: '',
		width: 150,

		renderCell: params =>
			params.row.status === 'open' && (
				<div
					onClick={() => console.log(params.row.id)}
					style={{
						cursor: 'pointer',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row',
						height: '100%',
						gap: '20px',
					}}
				>
					<Button>
						<CheckCircleIcon
							style={{ color: 'orange', cursor: 'pointer' }}
						></CheckCircleIcon>
						Закрыть
					</Button>
				</div>
			),
	},

	{
		field: 'more',
		headerName: '',
		width: 120,
		renderCell: params => (
			<div
				style={{
					display: 'flex',
					cursor: 'pointer',
					alignItems: 'center',
					flexDirection: 'row',
					gap: '10px',
				}}
			>
				<InfoIcon
					style={{ color: 'blue' }}
					onClick={() => console.log(params.row.id)}
				></InfoIcon>
				Подробнее
			</div>
		),
	},
	{
		field: 'delete',
		headerName: '',
		width: 120,
		renderCell: params => (
			<div
				style={{
					cursor: 'pointer',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'row',
					justifyContent: 'center',
					gap: '10px',
				}}
			>
				<DeleteIcon
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => console.log(params.row.id)}
				></DeleteIcon>
				Удалить
			</div>
		),
	},
]
