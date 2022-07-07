import React, { useReducer } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero Section/Hero';
import Chars from './components/Hero Section/Chars/Chars';
import Plans from './components/Plans Section/Plans';
import Reviews from './components/Reviews Section/Reviews';
import LogIn from './components/Forms/LogIn';
import SignUp from './components/Forms/SignUp';
import Footer from './components/Footer/Footer';

const SECTIONS = ['HERO', 'PLANS', 'REVIEWS', 'LOGIN', 'SIGNUP'];
let circle;
let els;
function statusSetter(state, action) {
  if (action.id === SECTIONS[0]) {
    return {
      selectedHero: true,
      selectedPlans: false,
      selectedReviews: false,
      selectedLogin: false,
      selectedSignup: false,
    };
  }
  if (action.id === SECTIONS[1]) {
    return {
      selectedHero: false,

      selectedPlans: true,
      selectedReviews: false,
      selectedLogin: false,
      selectedSignup: false,
    };
  }
  if (action.id === SECTIONS[2]) {
    return {
      selectedHero: false,

      selectedPlans: false,
      selectedReviews: true,
      selectedLogin: false,
      selectedSignup: false,
    };
  }
  if (action.id === SECTIONS[3]) {
    return {
      selectedHero: false,
      selectedPlans: false,
      selectedReviews: false,
      selectedLogin: true,
      selectedSignup: false,
    };
  }
  if (action.id === SECTIONS[4]) {
    return {
      selectedHero: false,

      selectedPlans: false,
      selectedReviews: false,
      selectedLogin: false,
      selectedSignup: true,
    };
  }
  return state;
}

function App() {
  const [statusData, dispatchStatus] = useReducer(statusSetter, {
    selectedHero: true,
    selectedPlans: false,
    selectedReviews: false,
    selectedLogin: false,
    selectedSignup: false,
  });

  function circleHandler(data) {
    circle = data;
  }
  function elsHandler(data) {
    els = data;
  }

  function dispatchHelper(index, percent) {
    dispatchStatus({ id: SECTIONS[index] });
    circle.current.style.left = `${percent.toString()}%`;
    els.forEach((el) => el.current.classList.remove('selected'));
    els[index].current.classList.add('selected');
  }

  function heroHandler() {
    dispatchHelper(0, -20);
  }
  function plansHandler() {
    dispatchHelper(1, 128);
  }
  function reviewsHandler() {
    dispatchHelper(2, 280.8);
  }
  function loginHandler() {
    dispatchHelper(3, 428.5);
  }
  function signupHandler() {
    dispatchHelper(4, 586);
  }

  function signupAnchorHandler() {
    dispatchHelper(4, 586.8);
  }

  // console.log(statusData);
  return (
    <>
      <Navigation
        onAboutUs={heroHandler}
        onPlans={plansHandler}
        onReviews={reviewsHandler}
        onLogin={loginHandler}
        onSignup={signupHandler}
        circle={circleHandler}
        navEls={elsHandler}
      />
      {statusData.selectedHero && <Hero />}
      {statusData.selectedHero && <Chars />}
      {statusData.selectedPlans && <Plans />}
      {statusData.selectedReviews && <Reviews />}
      {statusData.selectedLogin && (
        <LogIn onSignupAnchor={signupAnchorHandler} />
      )}
      {statusData.selectedSignup && <SignUp />}

      <Footer />
    </>
  );
}

export default App;
