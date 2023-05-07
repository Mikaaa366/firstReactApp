import styles from './Navbar.module.scss';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navWrapper}>
          <a href='/'>
            <span className='fa fa-tasks'></span>
          </a>
          <ul>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;