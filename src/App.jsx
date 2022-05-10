import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";
import Header from "./Header";

import styles from "./styles/App.module.css";

const Articles = lazy(() => import("./Articles"));
const Article = lazy(() => import("./Article"));
const ComingSoon = lazy(() => import("./ComingSoon"));
const ErrorPage = lazy(() => import("./ErrorPage"));


function App() {
	return <div class={styles.app}>
		<div class={styles.contained}>
			<Header />
			<div class={styles.body}>
				<Routes>
					<Route path="/" element={<Articles/>} />
					<Route path="/article/*" element={<Article />} />
					<Route path="/projects" element={<ComingSoon />} />
					<Route path="/about" element={<ComingSoon />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</div>
	</div>;
}

export default App;
