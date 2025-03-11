import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { LoginForm } from '../components/Login/LoginForm';
import { useEffect } from 'react';
const Login = () => {
    const navigate = useNavigate()
    const {user} = useSelector(state=>state.auth)
    useEffect(() => {
        if (user) {
            navigate('/player/home');
        }
  }, [navigate, user]);
    
    return (
            <div className='login' style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                <LoginForm shadowActive={true}/>
            </div>
    );
};

export default Login;