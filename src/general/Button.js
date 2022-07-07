import styles from './Button.module.css';

function Button(props) {
  // console.log(props);
  return (
    <button
      className={`${styles.btn} ${styles[props.className]}`}
      onClick={props.onClick}
      type={props.type ? props.type : ''}
    >
      {props.children}
    </button>
  );
}

export default Button;
