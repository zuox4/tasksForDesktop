import { CardWithInfo } from './CardWithInfo'
import { ImpotantInfo } from './ImpotantInfo'
import { InfoUserConteiner } from './InfoUserConteiner'
import doneIcon from './done.svg'
import statIcon from './stat.svg'
import first from '../Tasks/first.svg'

import styles from './MainPage.module.css'
import { PhotoUser } from './PhotoUser'
import { Categories } from './СategoriesConteiner'
export const MainPage = () =>{
    return(
        <div className={styles.mainpage}>
            <InfoUserConteiner>
                <div className={styles.userInfo}>
                    <PhotoUser/>
                    <ImpotantInfo/>
                </div>
                <div className={styles.cards}>
                    <CardWithInfo icon={doneIcon} info={'25'}/>
                    <CardWithInfo icon={statIcon} info={'49'}/>
                    <CardWithInfo icon={first} info={'УШУ'}/>
                </div>
            </InfoUserConteiner>
            <div>
                <Categories/>
            </div>
        </div>
    )
}