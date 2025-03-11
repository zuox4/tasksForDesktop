import logoApp from '../../assets/logoApp.svg';
import { Logout } from "./Logout";
import { Balance } from "./Balance";
import styles from './HeaderStyle.module.css'
import { ChangeRoleSelect } from './ChangeRole';
import { useSelector } from 'react-redux';

export const Header = () => {
  const { user, currentRole } = useSelector(state=>state.auth)
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logoApp} alt="App Logo" />
        <h3 className={styles.appName}>USHACHI&PERVACHU</h3>
      </div>
      {currentRole}
      <div className={styles.actionsContainer}>
        {user&&<ChangeRoleSelect/>}
        {(currentRole==='player')&&<Balance/>}
        <Logout/>
      </div>
    </div>
  );
};