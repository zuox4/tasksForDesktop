import styles from './Content.module.css';
import { useEffect, useState, useCallback } from 'react';
import { EmailInput } from './EmailInput';
import { VereficationInput } from './VereficationInput';

export const LoginForm = ({ handleLogin }) => {
    const [vereficationCode, setVereficationCode] = useState('');
    const [isCheckingAuthCode, setIsCheckingAuthCode] = useState(false);

    const handleVerevicationChange = useCallback((e) => {
        setVereficationCode(e.target.value.toLowerCase());
    }, []);

    const closeActivation = useCallback(() => {
        setVereficationCode('')
        setIsCheckingAuthCode(false);
    }, []);

    return (
        <div className={styles.loginform}>
            <h1 style={{ margin: 0 }}>Вход</h1>
            {!isCheckingAuthCode ? (
                <EmailInput setIsCheckingAuthCode={setIsCheckingAuthCode} handleLogin={handleLogin}/>
            ) : (
                <VereficationInput handleVerevicationChange={handleVerevicationChange} vereficationCode={vereficationCode} closeActivation={closeActivation}/>
            )}

        </div>
    );
};