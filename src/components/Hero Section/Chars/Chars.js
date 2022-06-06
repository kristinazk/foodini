import styles from './Chars.module.css';

function Chars() {
  return (
    <div className={styles['chars--box']}>
      <ul className={styles['chars--list']}>
        <div className={styles['chars--cover']}>&nbsp;</div>
        <li className={styles['chars--el']}>
          <ion-icon
            className={styles['chars--icon']}
            name="leaf-outline"
          ></ion-icon>
          <h6>100% Organic</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiutus nunc. Maecenas vulputate mollis imperdiet. Cras scelerisque
            quis massa a dictum. Nulla placerat lectus augue, eu hendrerit
            turpis pretium id. Maecenas vitae suscipit
          </p>
        </li>
        <li className={styles['chars--el']}>
          <ion-icon
            className={styles['chars--icon']}
            name="infinite-outline"
          ></ion-icon>
          <h6>We Work 365 Days a Year</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiutus nunc. Maecenas vulputate mollis imperdiet. Cras scelerisque
            quis massa a dictum. Nulla placerat lectus augue, eu hendrerit
            turpis pretium id. Maecenas vitae suscipit
          </p>
        </li>
        <li className={styles['chars--el']}>
          <ion-icon
            className={styles['chars--icon']}
            name="cash-outline"
          ></ion-icon>
          <h6>Suitable for People on Budget</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiutus nunc. Maecenas vulputate mollis imperdiet. Cras scelerisque
            quis massa a dictum. Nulla placerat lectus augue, eu hendrerit
            turpis pretium id. Maecenas vitae suscipit
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Chars;
