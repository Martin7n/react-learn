import styles from './Navigation.module.css'
const Navigation = () => {

return (
    <nav>
 <ul className={styles.navUl}> 

    <li className={styles.navLi}>Home</li>
    <li className={styles.navLi}>Not Home</li>
    <li className={styles.navLi}>Exit</li>
 </ul>
 </nav>
);

};

export default Navigation;