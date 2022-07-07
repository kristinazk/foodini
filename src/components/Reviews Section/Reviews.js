import styles from './Reviews.module.css';
import Heading from '../../general/Heading';

function Reviews() {
  return (
    <section className={styles['reviews--section']}>
      <Heading className="reviews--title">
        Find Out What Foodinists Think About Us!
      </Heading>
      <div className={styles['reviews--container']}>
        <div
          className={`${styles['review--box']} ${styles['review--box__vanessa']}`}
        >
          <div className={styles['review--img-box']}>
            <img alt="customer" src={require('../../Images/Vanessa.jpg')} />
            <h6>Vanessa Smith</h6>
          </div>
          <p>
            As a vegan it was very difficult for me to find suitable restaurants
            and eat properly. Now everything has changed thanks to Foodini. I
            get to choose whatever vegan dish I desire, and it is delivered to
            my door after an hour and a half or so. It is truly amazing how they
            manage to prepare it so fast.
          </p>
        </div>
        <div
          className={`${styles['review--box']} ${styles['review--box__john']}`}
        >
          <div className={styles['review--img-box']}>
            <img alt="customer" src={require('../../Images/John.jpg')} />
            <h6>John Murphy</h6>
          </div>
          <p>
            I like trying new things. After first trying out Fodini I was
            fascinated. The huge selection of healthy meals made me fall in love
            with it.
          </p>
        </div>
        <div
          className={`${styles['review--box']} ${styles['review--box__sam']}`}
        >
          <div className={styles['review--img-box']}>
            <img alt="customer" src={require('../../Images/Sam.jpg')} />
            <h6>Sam Brown</h6>
          </div>
          <p>At last I can enjoy nice food delivered on time.</p>
        </div>
        <div
          className={`${styles['review--box']} ${styles['review--box__sai']}`}
        >
          {' '}
          <div className={styles['review--img-box']}>
            <img alt="customer" src={require('../../Images/Sai.jpg')} />
            <h6>Sai Laghari</h6>
          </div>
          <p>Now I can stop wasting time on preparing food.</p>
        </div>
        <div
          className={`${styles['review--box']} ${styles['review--box__angela']}`}
        >
          {' '}
          <div className={styles['review--img-box']}>
            <img alt="customer" src={require('../../Images/Angela.jpg')} />
            <h6>Angela Ivanova</h6>
          </div>
          <p>
            I have never liked cooking and cleaning the kitchen afterwards. I
            also do not like going to restaurants much, only on special
            occasions. So, for me personally, Foodini is a life-saver. Now I can
            stop worrying about preparing food or going to the restaurants, for
            there is a menu prepared especially for me, to suit my needs. I keep
            a strict diet, so it was refreshing to find out Foodini had great
            dishes, which would fit my diet perfectly. I can’t imagine my life
            without it anymore, so I advise everyone to try it.
          </p>
        </div>
        <div
          className={`${styles['review--box']} ${styles['review--box__anita']}`}
        >
          {' '}
          <div className={styles['review--img-box']}>
            <img alt="customer" src={require('../../Images/Anita.jpg')} />
            <h6>Anita Sanchez</h6>
          </div>
          <p>
            With Foodini I have the opportunity to order whatever I want,
            whenever I want it, it is as easy as that! In addition, every week I
            get free snacks! Isn’t that amazing?!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
