import { ImpotantInfo } from './ImpotantInfo'
import { InfoUserConteiner } from './InfoUserConteiner'
import styles from './MainPage.module.css'
import { PhotoUser } from './PhotoUser'
export const MainPage = () =>{
    return(
        <div className={styles.mainpage}>
            <InfoUserConteiner>
                <div className={styles.userInfo}>
                    <PhotoUser/>
                    <ImpotantInfo/>
                </div>
            </InfoUserConteiner>
        </div>
    )
}