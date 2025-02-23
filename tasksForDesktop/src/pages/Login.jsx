import React from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure, logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const { user, loading, error } = useSelector(state => state.auth); 
    
    const handleLogin = async () => {
        dispatch(loginStart());
        try {
            const result = await signInWithPopup(auth, provider);
            const userData = {
                uid: result.user.uid,
                displayName: result.user.displayName,
                email: result.user.email,
            };
            dispatch(loginSuccess(userData));
            navigate('/home')
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;