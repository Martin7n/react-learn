import styles from './Navigation.module.css'
import { Link } from 'react-router-dom';

const Navigation = () => {

return (
    <nav>
 <ul className={styles.navUl}> 

    <Link to="/"  className={styles.navLi}>Home</Link>
    <Link to="/about" className={styles.navLi}>About</Link>
    <Link to="/register" className={styles.navLi}>Register</Link>
    <Link to="/login" className={styles.navLi}>Login</Link>


    <li className={styles.navLi}>Exit</li>
 </ul>
 </nav>
);

};

export default Navigation;