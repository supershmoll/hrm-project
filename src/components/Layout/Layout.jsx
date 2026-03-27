import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Sidebar />

      <main className={styles.mainContentContainer}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
