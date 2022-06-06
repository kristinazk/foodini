import styles from './Input.module.css';

function Input(props) {
  return (
    <input
      className={`${styles.input} ${props.className}`}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
