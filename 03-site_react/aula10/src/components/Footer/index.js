import styles from '@/components/Footer/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>Created By <Link href="#">João Bonhin</Link></span>
        </footer>
    );
}

export default Footer;