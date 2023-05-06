import styles from './Navbar.module.scss';
import Container from '../Container/Container';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navWrapper}>
          <a href='/'>
            <span className='fa fa-tasks'></span>
          </a>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/favorite'>Favorite</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;