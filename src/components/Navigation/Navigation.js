import { useRef } from 'react';
import styles from './Navigation.module.css';

function Navigation(props) {
  const circle = useRef();
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const el4 = useRef();
  const el5 = useRef();
  props.circle(circle);
  const els = [el1, el2, el3, el4, el5];
  props.navEls(els);

  return (
    <nav className={styles.navigation}>
      <ul className={styles['navigation--list']}>
        <li className={styles['navigation--logo']}>Foodini</li>
        <li className={styles['navigation--element-1']}>
          <a ref={el1} className="selected" onClick={props.onAboutUs}>
            About Us     
             <div className={styles.circle} ref={circle}>
        &nbsp;
      </div>
          </a>
        </li>
        <li className={styles['navigation--element-2']} ref={el2}>
          <a ref={el2} onClick={props.onPlans}>
            Plans
          </a>
        </li>
        <li className={styles['navigation--element-3']} ref={el3}>
          <a ref={el3} onClick={props.onReviews}>
            Reviews
          </a>
        </li>
        <li className={styles['navigation--element-4']} ref={el4}>
          <a ref={el4} onClick={props.onLogin}>
            Log In
          </a>
        </li>
        <li className={styles['navigation--element-5']} ref={el5}>
          <a ref={el5} onClick={props.onSignup}>
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
