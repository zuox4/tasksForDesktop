import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../features/auth/authSlice';
import { useNavigate } from 'react-router';

import { LoginForm } from '../components/Login/LoginForm';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    
    const handleLogin = async () => {
        dispatch(loginStart());
        try {
            const result = await signInWithPopup(auth, provider);
            const userData = {
                uid: result.user.uid,
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL
            };
            dispatch(loginSuccess(userData));
            navigate('/')
            
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };

    return (
            <div className='login' style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                <LoginForm shadowActive={true}/>
            </div>
    );
};

export default Login;