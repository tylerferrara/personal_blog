import { createResource } from 'solid-js';
import { Link } from "solid-app-router";
import "./styles/Articles.module.css";
import styles from "./styles/Articles.module.css";


const fetchTitles = (url) => {

}

function Articles() {
    const [rawMarkdown] = createResource('https://raw.githubusercontent.com/tylerferrara/local_library/main/articles/first_article.md', getContent);
    
    return  (<>
        <h1><span>&#62;</span> Say No More</h1>
        <div class={styles.results}>
        <Link href="/article">Article Test</Link>
        </div>
    </>
    )
}

export default Articles;