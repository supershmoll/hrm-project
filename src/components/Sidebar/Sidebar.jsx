import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import styles from './Sidebar.module.css';

import userIcon from '../../assets/logo/u_user.svg';
import employeesIcon from '../../assets/logo/u_list-ul.svg';
import clipboardIcon from '../../assets/logo/u_clipboard-notes.svg';

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
      <div className={styles.topSection}>
        <div className={styles.bottomSection}>
          <button
            className={styles.navItem}
            title="Logout"
            onClick={handleLogout}
          >
            <img src={userIcon} alt="Language" className={styles.icon} />
          </button>
        </div>
        <div className={styles.divider} />

        <NavLink to="/employees" className={getNavClass} title="Employees">
          <img src={employeesIcon} alt="Employees" className={styles.icon} />
        </NavLink>

        <NavLink to="/courses" className={getNavClass} title="Courses">
          <img src={clipboardIcon} alt="Courses" className={styles.icon} />
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
