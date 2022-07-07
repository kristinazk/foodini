import styles from './LogIn.module.css';
import Input from '../../general/Input';
import Label from '../../general/Label';
import Heading from '../../general/Heading';
import Button from '../../general/Button';
import { useState, useReducer } from 'react';
import StatusContext from '../../Contexts/StatusContext';

const ACTIONS_LOG_IN = [
  'USERNAME_INPUT',
  'PASSWORD_INPUT',
  'USERNAME_BLUR',
  'PASSWORD_BLUR',
];

function isValidSetter(state, action) {
  if (action.type === ACTIONS_LOG_IN[0]) {
    return {
      usernameIsValid: action.value.trim() !== '',
      usernameTouched: state.usernameTouched,
      passwordIsValid: state.passwordIsValid,
      passwordTouched: state.passwordTouched,
    };
  }
  if (action.type === ACTIONS_LOG_IN[1]) {
    return {
      usernameIsValid: state.usernameIsValid,
      usernameTouched: state.usernameTouched,
      passwordIsValid: action.value.length > 6,
      passwordTouched: state.passwordTouched,
    };
  }
  if (action.type === ACTIONS_LOG_IN[2]) {
    return {
      usernameIsValid: state.usernameIsValid,
      usernameTouched: true,
      passwordIsValid: state.passwordIsValid,
      passwordTouchedL: state.passwordTouched,
    };
  }
  if (action.type === ACTIONS_LOG_IN[3]) {
    return {
      usernameIsValid: state.usernameIsValid,
      usernameTouched: state.usernameTouched,
      passwordIsValid: state.passwordIsValid,
      passwordTouched: true,
    };
  }
  return state;
}

function LogIn(props) {
  const [signupState, setSignupState] = useState(false);
  const [formIsValid, setFormIsValid] = useState(null);
  const [inputData, dispatchInput] = useReducer(isValidSetter, {
    usernameIsValid: null,
    usernameTouched: false,
    passwordIsValid: null,
    passwordTouched: false,
  });

  function signupHandler() {
    setSignupState(true);
    props.onSignupAnchor(signupState);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    setFormIsValid(inputData.passwordIsValid && inputData.usernameIsValid);
  }

  function usernameChangeHandler(e) {
    dispatchInput({ type: ACTIONS_LOG_IN[0], value: e.target.value });
  }

  function passwordChangeHandler(e) {
    dispatchInput({ type: ACTIONS_LOG_IN[1], value: e.target.value });
  }
  function usernameBlurHandler() {
    dispatchInput({ type: ACTIONS_LOG_IN[2] });
  }
  function passwordBlurHandler() {
    dispatchInput({ type: ACTIONS_LOG_IN[3] });
  }

  return (
    <StatusContext.Provider value={formIsValid}>
      <div className={styles.container}>
        <Heading>Let's Log In</Heading>
        <form className={styles['login--form']} onSubmit={formSubmitHandler}>
          {/* <div className={styles['form--box']}> */}
          <Label htmlFor="username">Username</Label>
          {inputData.usernameTouched && !inputData.usernameIsValid && (
            <p className="error--text"> Username Must Not Be Empty.</p>
          )}
          <Input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            className={
              inputData.usernameTouched &&
              !inputData.usernameIsValid &&
              'error--input'
            }
          />
          <Label htmlFor="password">Password</Label>
          {inputData.passwordTouched && !inputData.passwordIsValid && (
            <p className="error--text">
              Invalid Password (Must Contain at Least 6 Characters).
            </p>
          )}
          <Input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            className={
              inputData.passwordTouched &&
              !inputData.passwordIsValid &&
              'error--input'
            }
          />
          {/* </div> */}
          <Button type="submit" className="btn__login">
            Log In
          </Button>
        </form>
        <div className={styles['sign-up--box']}>
          <p className={styles['sign-up--text']}>Don’t have an account? </p>
          <a
            href="#"
            className={styles['sign-up--link']}
            onClick={signupHandler}
          >
            Sign up here.
          </a>
        </div>
      </div>
    </StatusContext.Provider>
  );
}

export default LogIn;
