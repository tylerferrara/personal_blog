import styles from './styles/Header.module.css'
import { Link } from "solid-app-router";

function Header() {
    return <div class={styles.header}>
        <Link href="/">{'Articles'}</Link>
        <Link href="/projects">{'Projects'}</Link>
        <Link href="/about">{'About'}</Link>
    </div>
}

export default Header;