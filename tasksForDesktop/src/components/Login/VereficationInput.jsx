import styles from './Content.module.css';
import { Component } from './InputOTP.tsx';

export const VereficationInput = ({handleVerevicationChange, vereficationCode, closeActivation}) =>{
    return(
        <div className={styles.inputBlock}>
            <label htmlFor='kodAuth'>Код авторизации</label>
            <input
                id='kodAuth'
                type='text'
                className={styles.input}
                value={vereficationCode}
                onChange={handleVerevicationChange}
            />
            <Component/>
            <button  style={{ width: '180px' }} onClick={closeActivation}>
                    Назад
            </button>
        </div>
    )
}