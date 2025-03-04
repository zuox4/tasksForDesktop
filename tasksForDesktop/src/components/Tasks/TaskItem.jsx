import { AdditionalInfo } from './AdditionalInfo'
import { HashTagsTask } from './HashTagsTask'
import { Tasker } from './Tasker'
import clockIcon from './icons/clockIcon.svg'
import kubokIcon from './icons/kubokIcon.svg'
import confirmIcon from './icons/confirmIcon.svg'
import styles from './TaskItem.module.css'
import { InfoCategory } from './InfoCategory'
import { DoButtonsConteiner } from './DoButtons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ModalWindow } from '../ModalWindow'
import {TaskModalItem} from './TaskModalItem'
export const TaskItem = ({item}) =>{
    const [isOpened, setIsOpened] = useState(false)
    const {openTasks} = useSelector(state => state.myTasks)
    useEffect(()=>{
        console.log(openTasks)
    },[])
    return(
        <>
            {isOpened && (
            <ModalWindow setIsOpened={setIsOpened}>
                <TaskModalItem item={item}/>
            </ModalWindow>
            )}

        <div className={styles.taskitemconteiner}>
            <div style={{margin:'10px'}} className=''>
                <div className={styles.header}>
                    <HashTagsTask heashTags={item.heashTags}/>
                    <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                        <InfoCategory categoryName={item.category}/>
                        <Tasker name={item.tasker}/>
                    </div>
                    
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <div>
                        <div className={styles.mainInfo}>
                            <h2 style={{fontSize:'16px', margin:'0', textAlign:'left', textTransform:'uppercase', marginTop:'5px'}}>{item.title}</h2>
                            <span style={{textAlign:'left'}}>{item.description}</span>

                        </div>

                        <div className={styles.AdditionalInfo}>
                            <AdditionalInfo title={item.deadLineDate} icon={clockIcon} />
                            <AdditionalInfo title='Требует согласования' icon={confirmIcon} />
                            <AdditionalInfo title='3000 Coins' icon={kubokIcon} />
                        </div>

                    </div>
                    <div style={{display:'flex', flexDirection:'column',justifyContent:'space-around', alignItems:'flex-end'}}>
                        {openTasks.includes(item.id)&&<div style={{ fontWeight:'500', padding:'0 10px', background:'rgb(255 212 0 / 32%)', borderRadius:'10px'}}>Ожидает вашего выполнения</div>}
                        {!openTasks.includes(item.id)&&<DoButtonsConteiner setIsOpened={setIsOpened}/>}
                    </div>
                    
                </div>


            </div>

        </div>
        </>
        
    )
}