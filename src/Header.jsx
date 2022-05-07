import styles from './styles/Header.module.css'
import { Link } from "solid-app-router";

function Header() {
    return <div class={styles.header}>
        <p class={styles.nomargin}><Link href="/">{'<'}</Link></p>
    </div>
}

export default Header;