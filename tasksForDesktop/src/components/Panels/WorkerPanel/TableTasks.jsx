import { DataGrid } from '@mui/x-data-grid'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchTasks } from '../../../features/workerTasks/workerTaksSlice'
import { columns } from './TableTasksColumns' // Импортируем колонки

export const TableTasks = () => {
	const dispatch = useDispatch()
	const { allTasks, loading } = useSelector(state => state.workerTasks)

	useEffect(() => {
		dispatch(fetchTasks())
		console.log(allTasks)
	}, [])

	return (
		!loading && (
			<DataGrid
				sx={{
					'& .MuiDataGrid-cell:focus': {
						outline: 'none !important', // Убирает синюю рамку фокуса
					},
					'& .MuiDataGrid-cell:hover': {
						backgroundColor: 'transparent', // Убирает hover-эффект
					},
				}}
				rows={[...allTasks]}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 13,
						},
					},
				}}
				pageSizeOptions={[5]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		)
	)
}
