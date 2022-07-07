import { useReducer, useState } from 'react';
import styles from './SignUp.module.css';
import Heading from '../../general/Heading';
import Label from '../../general/Label';
import Input from '../../general/Input';
import Button from '../../general/Button';
import StatusContext from '../../Contexts/StatusContext';

const ACTIONS_SIGN_UP = [
  'NAME_INPUT',
  'LASTNAME_INPUT',
  'EMAIL_INPUT',
  'PASSWORD_INPUT',
  'COFIRM_PASSWORD_INPUT',
  'NAME_BLUR',
  'LASTNAME_BLUR',
  'EMAIL_BLUR',
  'PASSWORD_BLUR',
  'CONFIRM_PASSWORD_BLUR',
];

function signUpHandler(state, action) {
  if (action.type === ACTIONS_SIGN_UP[0]) {
    return {
      firstNameIsValid: action.value.trim() !== '',
      lastNameIsValid: state.lastNameIsValid,
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.passwordIsValid,
      passwordValue: state.passwordValue,
      confirmPasswordIsValid: state.passwordIsValid,
      firstNameTouched: state.firstNameTouched,
      lastNameTouched: state.lastNameTouched,
      emailTouched: state.emailTouched,
      passwordTouched: state.passwordTouched,
      confirmPasswordTouched: state.confirmPasswordTouched,
    };
  }
  if (action.type === ACTIONS_SIGN_UP[1]) {
    return {
      firstNameIsValid: state.firstNameIsValid,
      lastNameIsValid: action.value.trim() !== '',
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.passwordIsValid,
      passwordValue: state.passwordValue,
      confirmPasswordIsValid: state.passwordIsValid,
      firstNameTouched: state.firstNameTouched,
      lastNameTouched: state.lastNameTouched,
      emailTouched: state.emailTouched,
      passwordTouched: state.passwordTouched,
      confirmPasswordTouched: state.confirmPasswordTouched,
    };
  }
  if (action.type === ACTIONS_SIGN_UP[2]) {
    return {
      firstNameIsValid: state.firstNameIsValid,
      lastNameIsValid: state.lastNameIsValid,
      emailIsValid: action.value.includes('@'),
      passwordIsValid: state.passwordIsValid,
      passwordValue: state.passwordValue,
      confirmPasswordIsValid: state.passwordIsValid,
      firstNameTouched: state.firstNameTouched,
      lastNameTouched: state.lastNameTouched,
      emailTouched: state.emailTouched,
      passwordTouched: state.passwordTouched,
      confirmPasswordTouched: state.confirmPasswordTouched,
    };
  }
  if (action.type === ACTIONS_SIGN_UP[3]) {
    return {
      firstNameIsValid: state.firstNameIsValid,
      lastNameIsValid: state.lastNameIsValid,
      emailIsValid: state.emailIsValid,
      passwordIsValid: action.value.length > 6,
      passwordValue: action.value,
      confirmPasswordIsValid: state.passwordIsValid,
      firstNameTouched: state.firstNameTouched,
      lastNameTouched: state.lastNameTouched,
      emailTouched: state.emailTouched,
      passwordTouched: state.passwordTouched,
      confirmPasswordTouched: state.confirmPasswordTouched,
    };
  }
  if (action.type === ACTIONS_SIGN_UP[4]) {
    console.log(action.value, state);
    return {
      firstNameIsValid: state.firstNameIsValid,
      lastNameIsValid: state.lastNameIsValid,
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.passwordIsValid,
      passwordValue: state.passwordValue,
      confirmPasswordIsValid: action.value === state.passwordValue,
      firstNameTouched: state.firstNameTouched,
      lastNameTouched: state.lastNameTouched,
      emailTouched: state.emailTouched,
      passwordTouched: state.passwordTouched,
      confirmPasswordTouched: state.confirmPasswordTouched,
    };
  }
  if (action.type === ACTIONS_SIGN_UP[5]) {
    return {
      firstNameIsValid: state.firstNameIsValid,
      lastNameIsValid: state.lastNameIsValid,
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.passwordIsValid,
      passwordValue: state.passwordValue,
      confirmPasswordIsValid: state.confirmPasswordIsValid,
      firstNameTouched: true,
      lastNameTouched: state.lastNameTouched,
      emailTouched: state.emailTouched,
      passwordTouched: state.passwordTouched,
      confirmPasswordTouched: state.confirmPasswordTouched,
    };
  }
  if (action.type === ACTIONS_SIGN_UP[6]) {
    return {
      firstNameIsValid: state.firstNameIsValid,
      lastNameIsValid: state.lastNameIsValid,
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.passwordIsValid,
      passwordValue: state.passwordValue,
      confirmPasswordIsValid: state.confirmPasswordIsValid,
      firstNameTouched: state.firstNameTouched,
      lastNameTouched: true,
      emailTouched: state.emailTouched,
      passwordTouched: state.passwordTouched,
      confirmPasswordTouched: state.confirmPasswordTouched,
    };
  }
  if (action.type === ACTIONS_SIGN_UP[7]) {
    return {
      firstNameIsValid: state.firstNameIsValid,
      lastNameIsValid: state.lastNameIsValid,
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.passwordIsValid,
      passwordValue: state.passwordValue,
      confirmPasswordIsValid: state.confirmPasswordIsValid,
      firstNameTouched: state.firstNameTouched,
      lastNameTouched: state.lastNameTouched,
      emailTouched: true,
      passwordTouched: state.passwordTouched,
      confirmPasswordTouched: state.confirmPasswordTouched,
    };
  }
  if (action.type === ACTIONS_SIGN_UP[8]) {
    return {
      firstNameIsValid: state.firstNameIsValid,
      lastNameIsValid: state.lastNameIsValid,
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.passwordIsValid,
      passwordValue: state.passwordValue,
      confirmPasswordIsValid: state.confirmPasswordIsValid,
      firstNameTouched: state.firstNameTouched,
      lastNameTouched: state.lastNameTouched,
      emailTouched: state.emailTouched,
      passwordTouched: true,
      confirmPasswordTouched: state.confirmPasswordTouched,
    };
  }
  if (action.type === ACTIONS_SIGN_UP[9]) {
    return {
      firstNameIsValid: state.firstNameIsValid,
      lastNameIsValid: state.lastNameIsValid,
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.passwordIsValid,
      passwordValue: state.passwordValue,
      confirmPasswordIsValid: state.confirmPasswordIsValid,
      firstNameTouched: state.firstNameTouched,
      lastNameTouched: state.lastNameTouched,
      emailTouched: state.emailTouched,
      passwordTouched: state.passwordTouched,
      confirmPasswordTouched: true,
    };
  }

  return state;
}

function SignUp() {
  const [signUpData, dispatchData] = useReducer(signUpHandler, {
    firstNameIsValid: null,
    lastNameIsValid: null,
    emailIsValid: null,
    passwordIsValid: null,
    passwordValue: '',
    confirmPasswordIsValid: null,
    firstNameTouched: false,
    lastNameTouched: false,
    emailTouched: false,
    passwordTouched: false,
    confirmPasswordTouched: false,
  });
  const [formIsValid, setFormIsValid] = useState(null);

  function nameChangeHandler(e) {
    dispatchData({ value: e.target.value, type: ACTIONS_SIGN_UP[0] });
  }
  function lastNameChangeHandler(e) {
    dispatchData({ value: e.target.value, type: ACTIONS_SIGN_UP[1] });
  }
  function emailChangeHandler(e) {
    dispatchData({ value: e.target.value, type: ACTIONS_SIGN_UP[2] });
  }
  function passwordChangeHandler(e) {
    dispatchData({ value: e.target.value, type: ACTIONS_SIGN_UP[3] });
  }
  function passwordConfirmChangeHandler(e) {
    dispatchData({ value: e.target.value, type: ACTIONS_SIGN_UP[4] });
  }
  function nameBlurHandler() {
    dispatchData({ type: ACTIONS_SIGN_UP[5] });
  }
  function lastNameBlurHandler() {
    dispatchData({ type: ACTIONS_SIGN_UP[6] });
  }
  function emailBlurHandler() {
    dispatchData({ type: ACTIONS_SIGN_UP[7] });
  }
  function passwordBlurHandler() {
    dispatchData({ type: ACTIONS_SIGN_UP[8] });
  }
  function passwordConfirmBlurHandler() {
    dispatchData({ type: ACTIONS_SIGN_UP[9] });
  }

  function formHandler() {
    setFormIsValid(
      signUpData.firstNameIsValid &&
        signUpData.lastNameIsValid &&
        signUpData.emailIsValid &&
        signUpData.passwordIsValid &&
        signUpData.confirmPasswordIsValid
    );
  }
  return (
    <StatusContext.Provider value={formIsValid}>
      <div className={styles.container}>
        <Heading>Become a Foodinist</Heading>
        <form className={styles['sign-up--form']} onSubmit={formHandler}>
          <div className={styles['el1']}>
            <Label htmlFor="name">First Name</Label>
            {signUpData.firstNameTouched && !signUpData.firstNameIsValid && (
              <p className="error--text">Invalid First Name.</p>
            )}
            <Input
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              className={
                signUpData.firstNameTouched &&
                !signUpData.firstNameIsValid &&
                'error--input'
              }
            />
          </div>
          <div className={styles['el2']}>
            <Label htmlFor="surname">Last Name</Label>
            {signUpData.lastNameTouched && !signUpData.lastNameIsValid && (
              <p className="error--text">Invalid Last Name.</p>
            )}
            <Input
              id="surname"
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              className={
                signUpData.lastNameTouched &&
                !signUpData.lastNameIsValid &&
                'error--input'
              }
            />
          </div>
          <div className={styles['el3']}>
            <Label htmlFor="email">Email</Label>
            {signUpData.emailTouched && !signUpData.emailIsValid && (
              <p className="error--text">Invalid Email Address.</p>
            )}
            <Input
              type="email"
              id="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              className={
                signUpData.emailTouched &&
                !signUpData.emailIsValid &&
                'error--input'
              }
            />
          </div>
          <div className={styles['el4']}>
            <Label htmlFor="password">Password</Label>
            {signUpData.passwordTouched && !signUpData.passwordIsValid && (
              <p className="error--text">
                Password Must Contain at Least 6 Characters.
              </p>
            )}
            <Input
              id="password"
              type="password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              className={
                signUpData.passwordTouched &&
                !signUpData.passwordIsValid &&
                'error--input'
              }
            />
          </div>
          <div className={styles['el5']}>
            <Label htmlFor="confirm">Confirm Password</Label>
            {signUpData.confirmPasswordTouched &&
              !signUpData.confirmPasswordIsValid && (
                <p className="error--text">Passwords Do Not Match.</p>
              )}
            <Input
              id="confirm"
              type="password"
              onChange={passwordConfirmChangeHandler}
              onBlur={passwordConfirmBlurHandler}
              className={
                signUpData.confirmPasswordTouched &&
                !signUpData.confirmPasswordIsValid &&
                'error--input'
              }
            />
          </div>
          <Button type="submit" className="btn__signup">
            Sign Up
          </Button>
        </form>
      </div>
    </StatusContext.Provider>
  );
}

export default SignUp;
