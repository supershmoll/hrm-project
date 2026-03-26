import Search from '../Search/Search';
import arrowDownIcon from '../../assets/logo/downArrow.svg';
import InnowiseLogo from '../../assets/logo/Innowiselogo.png';
import notification from '../../assets/logo/notification.svg';
import avatar from '../../assets/logo/avatar.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <img src={InnowiseLogo} alt="Innowise Logo" className={styles.logo} />
      </div>

      <div className={styles.rightSection}>
        <div className={`${styles.searchWrapper} ${styles.headerItem}`}>
          <Search placeholder="Search" />
        </div>

        <div className={`${styles.language} ${styles.headerItem}`}>
          <span>EN</span>
          <img
            src={arrowDownIcon}
            alt="Language Toggle"
            className={styles.arrowIcon}
          />
        </div>

        <div className={`${styles.notificationWrapper} ${styles.headerItem}`}>
          <img src={notification} alt="Notifications" className={styles.icon} />
        </div>

        <div className={`${styles.profile} ${styles.headerItem}`}>
          <img src={avatar} alt="User Avatar" className={styles.avatar} />
          <div className={styles.userInfo}>
            <span className={styles.userName}>Darrell Steward</span>
            <span className={styles.userRole}>QA Engineer</span>
          </div>
          <img
            src={arrowDownIcon}
            alt="Profile Options"
            className={styles.arrowIcon}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
