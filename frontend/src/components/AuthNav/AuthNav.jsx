import styles from './AuthNav.module.css';
import icons from '../../assets/icons/icons.svg';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authContent}>
        <svg className={styles.logoSvg}>
          <use href={`${icons}#icon-logo`} className={styles.logo} />
        </svg>

        <h1 className={styles.authTitle}>Welcome to the app!</h1>
        <p className={styles.authDescriptions}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>

        <nav className={styles.authButtons}>
          <NavLink to={`/register`} className={styles.diagonalButton}>
            <p className={styles.diagonalButtonText}>Registration</p>
          </NavLink>
          <NavLink to={`/signin`} className={styles.diagonalButton}>
            <p className={styles.diagonalButtonText}>Sign in</p>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
