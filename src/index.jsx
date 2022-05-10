import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import "./styles/Index.css";
import App from "./App";

render(
	() => (
		<Router>
			<App />
		</Router>
	),
	document.getElementById("root")
);
