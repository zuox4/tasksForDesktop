import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import exitIcon from '../assets/exit.svg';
import logoutIcon from '../assets/logoutIcon.svg'
import logoApp from '../assets/logoApp.svg';
import {NavBarLk} from './NavBarLk'
import { Logout } from "./Logout";
import { Balance } from "./Balance";
// Выносим стили в отдельный объект
const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: 'solid 1px grey',
    height: '60px',
    alignItems: 'center',
    padding: '0 10px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  appName: {
    margin: '0',
    marginLeft: '10px',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    fontSize:'16px',
    fontWeight: '600',
    alignItems: 'center',
  },
  avatar: {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
  },
};

export const Header = () => {
  const { displayName, photoURL } = useSelector(state => state.auth.user);
  
  return (
    <div style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logoApp} alt="App Logo" />
        <h3 style={styles.appName}>IshachuHuyachy</h3>
      </div>
      <div style={{display:'flex', flexDirection:'row', gap:'20px', alignItems:'center'}}>
        <NavBarLk/>
        <Balance/>
        <Logout/>
      </div>


    </div>
  );
};