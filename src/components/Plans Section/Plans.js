import styles from './Plans.module.css';
import Button from '../../general/Button';

function Plans() {
  return (
    <section className={styles['plans--section']}>
      <h1 className={styles['plans--title']}>
        Our Monthly Plans are Designed Especially for You
      </h1>
      <div className={styles['plans--container']}>
        <div
          className={`${styles['plans--plan']} ${styles['plans--plan__medium']}`}
        >
          <h2 className={styles['plan--title']}>Medium</h2>
          <p className={styles['plan--price']}>
            <span>&#36;</span>250
          </p>
          <ul className={styles['plan--list']}>
            <li className={styles['plan--el']}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>2 meals per day</p>
            </li>
            <li className={styles['plan--el']}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>Free Delivery</p>
            </li>
            <li className={styles['plan--el']}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>Order 24/7</p>
            </li>
            <li className={styles['plan--el']}>
              <ion-icon name="close-outline"></ion-icon>
              <p>Free Healthy Snacks</p>
            </li>
          </ul>
        </div>
        <div
          className={`${styles['plans--plan']} ${styles['plans--plan__complete']}`}
        >
          <h2 className={styles['plan--title']}>Complete</h2>
          <p className={styles['plan--price']}>
            <span>&#36;</span>350
          </p>
          <ul className={styles['plan--list']}>
            <li className={styles['plan--el']}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>3 meals per day</p>
            </li>
            <li className={styles['plan--el']}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>Free Delivery</p>
            </li>
            <li className={styles['plan--el']}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>Order 24/7</p>
            </li>
            <li className={styles['plan--el']}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>Free Healthy Snacks</p>
            </li>
          </ul>
        </div>
        <div
          className={`${styles['plans--plan']} ${styles['plans--plan__starter']}`}
        >
          <h2 className={styles['plan--title']}>Starter</h2>
          <p className={styles['plan--price']}>
            <span>&#36;</span>180
          </p>
          <ul className={styles['plan--list']}>
            <li className={styles['plan--el']}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>1 meal per day</p>
            </li>
            <li className={styles['plan--el']}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>Free Delivery</p>
            </li>
            <li className={styles['plan--el']}>
              <ion-icon name="close-outline"></ion-icon>
              <p>Order 24/7</p>
            </li>
            <li className={styles['plan--el']}>
              <ion-icon name="close-outline"></ion-icon>
              <p>Free Healthy Snacks</p>
            </li>
          </ul>
        </div>
      </div>
      {<Button className={styles.button}>Choose</Button>}
    </section>
  );
}

export default Plans;
