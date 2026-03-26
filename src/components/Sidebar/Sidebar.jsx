import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import styles from './Sidebar.module.css';

import userIcon from '../../assets/logo/u_user.svg';
import employeesIcon from '../../assets/logo/u_list-ul.svg';
import clipboardIcon from '../../assets/logo/u_clipboard-notes.svg';
import calendarIcon from '../../assets/logo/u_calendar-alt.svg';
import settingIcon from '../../assets/logo/u_setting.svg';
import questionIcon from '../../assets/logo/u_question-circle.svg';
import globeIcon from '../../assets/logo/u_globe.svg';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('hrm-token');
    dispatch(logout());
    navigate('/');
  };

  const getNavClass = ({ isActive }) =>
    `${styles.navItem} ${isActive ? styles.active : ''}`;

  return (
    <aside className={styles.sidebar}>
      <button className={styles.collapseBtn} title="Collapse sidebar">
        ›
      </button>

      <div className={styles.topSection}>
        <NavLink to="/" className={getNavClass} title="Login">
          <img src={userIcon} alt="Login" className={styles.icon} />
        </NavLink>

        <div className={styles.divider} />

        <NavLink to="/employees" className={getNavClass} title="Employees">
          <img src={employeesIcon} alt="Employees" className={styles.icon} />
        </NavLink>

        <NavLink to="/courses" className={getNavClass} title="Courses">
          <img src={clipboardIcon} alt="Courses" className={styles.icon} />
        </NavLink>

        <NavLink to="/calendar" className={getNavClass} title="Calendar">
          <img src={calendarIcon} alt="Calendar" className={styles.icon} />
        </NavLink>

        <NavLink to="/settings" className={getNavClass} title="Settings">
          <img src={settingIcon} alt="Settings" className={styles.icon} />
        </NavLink>
      </div>

      <div className={styles.bottomSection}>
        <button className={styles.navItem} title="Help">
          <img src={questionIcon} alt="Help" className={styles.icon} />
        </button>
        <button className={styles.navItem} title="Language">
          <img src={globeIcon} alt="Language" className={styles.icon} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
