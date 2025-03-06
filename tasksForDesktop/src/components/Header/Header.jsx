import logoApp from '../../assets/logoApp.svg';
import { Logout } from "./Logout";
import { Balance } from "./Balance";
import styles from './HeaderStyle.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logoApp} alt="App Logo" />
        <h3 className={styles.appName}>USHACHI&PERVACHU</h3>
      </div>
      <div className={styles.actionsContainer}>
        <Balance/>
        <Logout/>
      </div>
    </div>
  );
};