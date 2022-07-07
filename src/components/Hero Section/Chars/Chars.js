import { useReducer, useRef } from 'react';
import styles from './Chars.module.css';

const SELECTED = ['FIRST', 'SECOND', 'THIRD'];

function statusSetter(state, action) {
  if (action.type === SELECTED[0]) {
    return {
      firstSelected: true,
      secondSelected: false,
      thirdSelected: false,
    };
  }
  if (action.type === SELECTED[1]) {
    return {
      firstSelected: false,
      secondSelected: true,
      thirdSelected: false,
    };
  }
  if (action.type === SELECTED[2]) {
    return {
      firstSelected: false,
      secondSelected: false,
      thirdSelected: true,
    };
  }
  return state;
}

function Chars() {
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const els = [el1, el2, el3];
  const cover = useRef();
  const [selectedData, dispatchStatus] = useReducer(statusSetter, {
    firstSelected: true,
    secondSelected: false,
    thirdSelected: false,
  });
  function firstElHandler() {
    dispatchStatus({ type: SELECTED[0] });
    // els.forEach((el) => el.current.classList.add('hidden'));
    // el1.current.classList.remove('hidden');
    cover.current.style.left = '2%';
  }
  function secondElHandler() {
    dispatchStatus({ type: SELECTED[1] });
    // els.forEach((el) => el.current.classList.add('hidden'));
    // el2.current.classList.remove('hidden');
    cover.current.style.left = '35.5%';
  }
  function thirdElHandler() {
    dispatchStatus({ type: SELECTED[2] });
    // els.forEach((el) => el.current.classList.add('hidden'));
    // el3.current.classList.remove('hidden');
    cover.current.style.left = '69%';
  }

  return (
    <div className={styles['chars--box']}>
      <ul className={styles['chars--list']}>
        <div className={styles['chars--cover']} ref={cover}>
          &nbsp;
        </div>
        <li className={styles['chars--el']}>
          <ion-icon
            className={styles['chars--icon']}
            name="leaf-outline"
            onClick={firstElHandler}
          ></ion-icon>
          {selectedData.firstSelected && (
            <div className="chars--el--box" ref={el1}>
              <h6>100% Organic</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiutus nunc. Maecenas vulputate mollis imperdiet. Cras
                scelerisque quis massa a dictum. Nulla placerat lectus augue, eu
                hendrerit turpis pretium id. Maecenas vitae suscipit
              </p>
            </div>
          )}
        </li>
        <li className={styles['chars--el']}>
          <ion-icon
            className={styles['chars--icon']}
            name="infinite-outline"
            onClick={secondElHandler}
          ></ion-icon>

          {selectedData.secondSelected && (
            <div className="chars--el--box" ref={el2}>
              <h6>We Work 365 Days a Year</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiutus nunc. Maecenas vulputate mollis imperdiet. Cras
                scelerisque quis massa a dictum. Nulla placerat lectus augue, eu
                hendrerit turpis pretium id. Maecenas vitae suscipit
              </p>
            </div>
          )}
        </li>
        <li className={styles['chars--el']}>
          <ion-icon
            className={styles['chars--icon']}
            name="cash-outline"
            onClick={thirdElHandler}
          ></ion-icon>

          {selectedData.thirdSelected && (
            <div className="chars--el--box" ref={el3}>
              <h6>Suitable for People on Budget</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiutus nunc. Maecenas vulputate mollis imperdiet. Cras
                scelerisque quis massa a dictum. Nulla placerat lectus augue, eu
                hendrerit turpis pretium id. Maecenas vitae suscipit
              </p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Chars;
