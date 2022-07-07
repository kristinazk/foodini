import { useState } from 'react';
import styles from './Hero.module.css';
import Button from '../../general/Button';
import Input from '../../general/Input';
import Label from '../../general/Label';

function Hero() {
  const [emailIsValid, setEmailIsValid] = useState(null);
  const [emailTouched, setEmailTouched] = useState(false);
  function emailChangeHandler(e) {
    setEmailIsValid(e.target.value.includes('@'));
  }
  function emailBlurHandler() {
    setEmailTouched(true);
  }
  return (
    <section className={styles['hero--section']}>
      <header className={styles['hero--header']}>
        <h1 className={styles['hero--title']}>
          With Foodini Eating Healthy is a Priority
        </h1>
        <p className={styles['hero--text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
        <div className={styles['call-to-action']}>
          <h3 className={styles['call-to-action--title']}>
            Want to learn More? Subscribe to Our Newsletter!
          </h3>
          <form className={styles['call-to-action--form']}>
            <Label htmlFor="email">Email</Label>

            <Input
              type="email"
              id="email"
              placeholder="me@example.com"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              className={emailTouched && !emailIsValid && 'error--input'}
            />
            <Button className="btn__call-to-action">Submit</Button>
          </form>
        </div>
      </header>
      <div className={styles['hero--image-box']}>
        <img
          className={styles['hero--image']}
          alt="Images of Meals"
          src={require('../../Images/Dishes.png')}
        />
      </div>
    </section>
  );
}

export default Hero;
