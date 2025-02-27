import { useCallback, useState, useEffect } from 'react';
import styles from './Content.module.css';
import { LoginWithGoogle } from './LoginWithGoogle.button';

export const EmailInput = ({ setIsCheckingAuthCode, handleLogin }) =>{
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const isEmailValid = useCallback((value) => EMAIL_REGEXP.test(value), []);
    const [disable, setDisable] = useState(true);
    const [email, setEmail] = useState('');

    useEffect(() => {
        setDisable(!isEmailValid(email));
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
                onChange={handleEmailChange}
            />
        <button disabled={disable} style={{ width: '180px' }} onClick={() => setIsCheckingAuthCode(true)}>
                    Получить код
                </button>
                <LoginWithGoogle handleLogin={handleLogin}/>
        </div>  
    )
}