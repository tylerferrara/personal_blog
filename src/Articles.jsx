import { createResource, For } from "solid-js";
import { Link } from "solid-app-router";

import "./styles/Articles.module.css";
import styles from "./styles/Articles.module.css";

const getArticlesURL = async (url) => {
	const resp = await fetch(url, {mode: "cors"});
	if (!resp.ok) {
		throw new Error("Network response was not OK");
	}
	const dirInfo = await resp.json();
	// retrieve articles directory
	for (let i = 0; i < dirInfo.tree.length; i++) {
		if (dirInfo.tree[i].path === "articles") {
			return dirInfo.tree[i].url;
		}
	}
	console.warn("Couldn't fetch articles URL from GitHub API!");
	return "";
};

const getArticles = async (url) => {
	const resp = await fetch(url, {mode: "cors"});
	if (!resp.ok) {
		throw new Error("Network response was not OK");
	}
	const articles = await resp.json();
	console.log(articles);
	return articles.tree;
};

const article = (info) => {
	return <Link href={"/article/" + info.sha}>{info.path.substring(0, info.path.length - 3)}</Link>;
};

function Articles() {
	const [articlesURL] = createResource("https://api.github.com/repos/tylerferrara/local_library/git/trees/main", getArticlesURL);
	const [articles] = createResource(articlesURL, getArticles);
	return  (<>
		<h1><span>&#62;</span> Say No More</h1>
		<div class={styles.results}>
			<For each={articles()} fallback={"Loading..."}>
				{article}
			</For>
		</div>
	</>
	);
}

export default Articles;
