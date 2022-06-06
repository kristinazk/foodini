import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <p>
        Copyright &copy; {new Date().getFullYear()} by Kristina Zakaryan. All
        Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
