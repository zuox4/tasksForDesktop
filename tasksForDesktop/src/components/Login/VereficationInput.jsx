import styles from './Content.module.css';

export const VereficationInput = ({vereficationCode, setVereficationCode}) =>{
   
    return(
        <div className={styles.inputBlock}>
            <label htmlFor='kodAuth'>Код авторизации</label>
            <input
                id='kodAuth'
                type='text'
                className={styles.input}
                value={vereficationCode}
                onChange={(e) => setVereficationCode(e.target.value)}
            />
        </div>
    )
}