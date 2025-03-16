import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	addNewTask,
	fetchTasks,
} from '../../../features/workerTasks/workerTaksSlice'
import { Button, TableCell, TextField } from '@material-ui/core'
import { TableTasks } from './TableTasks'
import { GridAddIcon } from '@mui/x-data-grid'
import { Fab, Rating } from '@mui/material'
import { value } from '../../../features/filterTask/filterTaskSlice'
import { AddForm } from './AddForm'
import { openModal } from '../../../features/modal/modalSlice'
import AddBoxIcon from '@mui/icons-material/AddBox'
import AddIcon from '@mui/icons-material/Add'
export const WorkerHome = () => {
	const dispatch = useDispatch()
	const { isOpen } = useSelector(state => state.modal)
	return (
		<>
			<h1>Добро пожаловать в панель заказчика.</h1>
			<div style={{ width: '40px', height: '40px', background: 'primary' }}>
				{!isOpen && (
					<Fab
						sx={{
							position: 'fixed',
							bottom: '30px',
							left: '20px',
							background: 'green',
							outline: 'none',
						}}
						onClick={() => dispatch(openModal({ componentName: 'AddForm' }))}
					>
						<AddIcon htmlColor='white' />
					</Fab>
				)}
			</div>
			<TableTasks />
		</>
	)
}
