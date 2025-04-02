import { useDispatch, useSelector } from 'react-redux'
import { InfoPanel } from '../../components/infoPanels/InfoPanel'
import { ResultPanel } from './ResultPanel'
import doneIcon from '../../assets/done.svg'
import star from '../../assets/Star.svg'
import { useEffect, useState } from 'react'
import { UserNameSection } from './UserNameSection'
import { LevelProgress } from './LevelProgress'
import { Error } from '../../components/Errors/Error'
import { loadProfileData } from '../../../features/playerProfile/playerProfileSlice'

export default function Profile() {
	const [error, setError] = useState(null)
	const {
		fullName,
		role,
		balance,
		score,
		edu_level,
		likeCategory,
		taskAssignments,
		raiting,
	} = useSelector(state => state.playerProfile.player)
	console.log(role)
	const formattedNameParts = fullName.split(' ').filter(Boolean)
	const currentLevel = Math.floor(score / 1000) + 1
	const progressPercentage = ((score % 1000) / 1000) * 100
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadProfileData())
	}, [dispatch])

	// if (isLoading) return <CircularProgress />
	if (error) return <Error />
	return (
		<div className='w-full flex flex-col gap-7'>
			<UserNameSection parts={formattedNameParts} />
			<section className='grid grid-cols-3 gap-4'>
				<InfoPanel title={role === 'student' ? 'Ученик' : 'Сотрудник'} />
				<InfoPanel title={edu_level} />
				<InfoPanel title={balance} />
			</section>

			<LevelProgress
				level={currentLevel}
				current={score % 1000}
				max={1000}
				progress={progressPercentage}
			/>

			<section className='grid grid-cols-3 gap-3 '>
				<ResultPanel
					name={'Любимое направление'}
					item={{ value: likeCategory }}
				/>
				<ResultPanel
					name={'Средний рейтинг'}
					item={{ value: raiting, icon: star }}
				/>
				<ResultPanel
					name={'Заданий выполнено'}
					item={{ value: taskAssignments, icon: doneIcon }}
				/>
			</section>
		</div>
	)
}
