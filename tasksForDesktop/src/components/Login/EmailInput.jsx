import { useCallback, useEffect } from 'react';
import styles from './Content.module.css';
export const EmailInput = ({ email, setEmail, setButtonIsActive }) =>{
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const isEmailValid = useCallback((value) => EMAIL_REGEXP.test(value), []);

    useEffect(() => {
        setButtonIsActive(!isEmailValid(email));
    }, [email, isEmailValid]);

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value.toLowerCase());
    }, []);

    return(
        <div className={styles.inputBlock}>         
                <label htmlFor='email'>Email:</label>
                <input
                    id='email'
                    type='email'
                    className={styles.input}
                    value={email}
                    onChange={handleEmailChange}/>
        </div>  
    )
}