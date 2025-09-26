import { Routes, Route } from 'react-router-dom';
import styles from "./Switchcomponent.module.css"
import { Link } from 'react-router-dom';

export const Switchcomponent = () => {

    return (


        <nav>
        <div className={styles.navDiv}> 

            <div className={styles.navDivFirst}>
                <div className={styles.navDiv1}><div className={styles.navWelcome}>Welcome...:</div></div>

                <div className={styles.navDiv1}><Link to="/userlist" className={styles.navhref}>Userlist app</Link></div>
                <div className={styles.navDiv1}><Link to="/starwars" className={styles.navhref}>Starwars app</Link></div>
                <div className={styles.navDiv1}><Link to="/gameplay" className={styles.navhref}>Gameplay.something app</Link></div>
            </div>


            {/* <div className={styles.navDivSecond}>
                <div className={styles.navDiv2}><Link to="/about" className={styles.navhref}>About</Link></div>
                <div className={styles.navDiv2}><Link to="/register" className={styles.navhref}>Register</Link></div>
                <div className={styles.navDiv2}><Link to="/login" className={styles.navhref}>Login</Link></div>
                <div className={styles.navDiv2}><Link to="/logout" className={styles.navhref}>Exit</Link></div>
        </div> */}
         </div>
 </nav>



    )



};


export default Switchcomponent;