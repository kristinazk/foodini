import { useState, useRef } from 'react';
import styles from './Plans.module.css';
import Button from '../../general/Button';
import Heading from '../../general/Heading';

function Plans() {
  const plan1 = useRef();
  const plan2 = useRef();
  const plan3 = useRef();
  const plans = [plan1, plan2, plan3];

  const [selectedState, setSelectedState] = useState(false);

  // function sectionHandler(e) {
  //   e.stopEventPropagation();
  //   setSelectedState(false);
  //   if (!selectedState) {
  //     plans.forEach((plan) => plan.current.classList.remove('selectedPlan'));
  //   }
  // }
  function planClickHandler1() {
    setSelectedState(true);
    plans.forEach((plan) => plan.current.classList.remove('selectedPlan'));
    plan1.current.classList.add('selectedPlan');
  }
  function planClickHandler2() {
    setSelectedState(true);
    plans.forEach((plan) => plan.current.classList.remove('selectedPlan'));
    plan2.current.classList.add('selectedPlan');
  }
  function planClickHandler3() {
    setSelectedState(true);
    plans.forEach((plan) => plan.current.classList.remove('selectedPlan'));
    plan3.current.classList.add('selectedPlan');
  }

  return (
    <section className={styles['plans--section']}>
      <Heading className="plans--title">
        Our Monthly Plans are Designed Especially for You
      </Heading>
      <div className={styles['plans--container']}>
        <div
          className={`${styles['plans--plan']} ${styles['plans--plan__medium']}`}
          onClick={planClickHandler1}
          ref={plan1}
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
          onClick={planClickHandler2}
          ref={plan2}
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
          onClick={planClickHandler3}
          ref={plan3}
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
      {selectedState && <Button className="btn__plans">Choose</Button>}
    </section>
  );
}

export default Plans;
