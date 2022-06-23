import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_div}>
            <button className={styles.footer_button}>SAIBA</button>
            <button className={styles.footer_button}>Noticias</button>
            <button className={styles.footer_button}>Novidades</button>
            <button className={styles.footer_button}>Curiosidades</button>
            </div>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2022
                </p>
        </footer>
    )
}

export default Footer