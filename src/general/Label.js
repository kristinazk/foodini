import styles from './Label.module.css';

function Label(props) {
  return (
    <label
      className={`${styles.label} ${styles[props.className]}`}
      htmlFor={props.htmlFor}
    >
      {props.children}
    </label>
  );
}

export default Label;
