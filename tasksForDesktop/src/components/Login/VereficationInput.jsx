import { useEffect, useState } from 'react';
import styles from './Content.module.css';

export const VereficationInput = ({handleVerevicationChange, vereficationCode, closeActivation}) =>{

    const [time, setTime] = useState(15)
    const [newCode, setNewCode] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => {
                if (prev <= 1) { // Останавливаем таймер, когда время достигнет 1
                    clearInterval(interval);
                    return 0; // Устанавливаем время в 0
                }
                return prev - 1; // Уменьшаем время на 1
            });
        }, 1000);
    
        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, []); // Пустой массив зависимостей, чтобы эффект запускался только один раз
    useEffect(()=>{
        if (time===0){
            setNewCode(true)
        }
    }, [time])
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
            {!newCode&&<p> 00:{time>=10?time:'0'+String(time)}</p>}
            {newCode&&<a>Получить новый код</a>}
            <button  style={{ width: '180px' }} onClick={closeActivation}>
                    Назад
            </button>
        </div>
    )
}