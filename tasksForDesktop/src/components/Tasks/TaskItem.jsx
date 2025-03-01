import { AdditionalInfo } from './AdditionalInfo'
import { HashTagsTask } from './HashTagsTask'
import { Tasker } from './Tasker'
import clockIcon from './clockIcon.svg'
import kubokIcon from './kubokIcon.svg'
import confirmIcon from './confirmIcon.svg'
import styles from './TaskItem.module.css'

export const TaskItem = () =>{
    return(
        <div className={styles.taskitemconteiner}>
            <div style={{margin:'10px'}} className=''>
                <div className={styles.header}>
                    <HashTagsTask/>
                    <Tasker name={'Ситникова Юлия Владимировна'}/>
                </div>

                <div className={styles.mainInfo}>
                    <h2 style={{fontSize:'16px', margin:'0', textAlign:'left', textTransform:'uppercase', marginTop:'5px'}}>Название</h2>
                    <span style={{textAlign:'left'}}>Провести экскурсию</span>
                    <div style={{width:'fit-content', textDecoration:'underline'}}>Развернуть</div>
                </div>

                <div className={styles.AdditionalInfo}>
                    <AdditionalInfo title='Срок выполнения 12.12.2025' icon={clockIcon} />
                    <AdditionalInfo title='Требует согласования' icon={confirmIcon} />
                    <AdditionalInfo title='3000 Coins' icon={kubokIcon} />
                </div>

            </div>

        </div>
    )
}