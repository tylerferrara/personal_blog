import { createMemo, createSignal } from "solid-js";
import { Link, useLocation } from "solid-app-router";

import "./styles/Header.module.css";
import styles from "./styles/Header.module.css";

function Header() {
	const location = useLocation();
	const pathname = createMemo(() => location.pathname);
	const [route, setRoute] = createSignal(pathname());

	return <div class={styles.header}>
		<Link id={"articles"} onclick={() => setRoute("/")} class={route() === "/" ? styles.selected : ""} href="/">{"Articles"}</Link>
		<Link id={"projects"} onclick={() => setRoute("/projects")} class={route() === "/projects" ? styles.selected : ""} href="/projects">{"Projects"}</Link>
		<Link id={"about"} onclick={() => setRoute("/about")} class={route() === "/about" ? styles.selected : ""} href="/about">{"About"}</Link>
	</div>;
}

export default Header;
