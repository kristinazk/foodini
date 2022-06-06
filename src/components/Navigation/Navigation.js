import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles['navigation--list']}>
        <li className={styles['navigation--logo']}>Foodini</li>
        <li className={styles['navigation--element__focus']}>
          <a>About Us</a>
        </li>
        <li className={styles['navigation--element']}>
          <a>Plans</a>
        </li>
        <li className={styles['navigation--element']}>
          <a>Reviews</a>
        </li>
        <li className={styles['navigation--element']}>Log In</li>
        <li className={styles['navigation--element']}>Sign Up</li>
      </ul>
    </nav>
  );
}

export default Navigation;
