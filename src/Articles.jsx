import { Link } from "solid-app-router";
import "./styles/Articles.module.css";
import styles from "./styles/Articles.module.css";

function Articles() {
    return  (<>
        <h1><span>&#62;</span> Say No More</h1>
        <input type="text" placeholder="search" />
        <div class={styles.results}>
        <Link href="/article">Article Test</Link>
        </div>
    </>
    )
}

export default Articles;