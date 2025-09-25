import styles from './Navigation.module.css'
import { Link } from 'react-router-dom';

const Navigation = () => {

return (
    <nav>
 <ul className={styles.navUl}> 

   <li className={styles.navLi}><Link to="/" className={styles.navhref}>Home</Link></li>
   <li className={styles.navLi}><Link to="/about" className={styles.navhref}>About</Link></li>
   <li className={styles.navLi}><Link to="/register" className={styles.navhref}>Register</Link></li>
   <li className={styles.navLi}><Link to="/login" className={styles.navhref}>Login</Link></li>
   <li className={styles.navLi}><Link to="/logout" className={styles.navhref}>Exit</Link></li>
 </ul>
 </nav>
);

};

export default Navigation;