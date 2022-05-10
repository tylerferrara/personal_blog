import SolidMarkdown from "solid-markdown";
import { Show, createResource } from "solid-js";

import './styles/Article.module.css';
import styles from './styles/Article.module.css';

const getContent = async (url) => {
    const utf8Decoder = new TextDecoder('utf-8');
    const resp = await fetch(url, {mode: "cors"});
    if (!resp.ok) {
        throw new Error('Network response was not OK');
    }
    const reader = resp.body.getReader()
    let done, value;
    let result = ""
    while (!done) {
        ({value, done} = await reader.read());
        result += utf8Decoder.decode(value);
    }
    return result
}

function Article() {
    const [rawMarkdown] = createResource('https://raw.githubusercontent.com/tylerferrara/local_library/main/articles/first_article.md', getContent);
    return  (<>
        <Show when={!rawMarkdown.loading} fallback={<div>Loading...</div>}>
            <SolidMarkdown class={styles.md} children={rawMarkdown()} />
        </Show>
    </>
    )
}

export default Article;