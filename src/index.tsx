import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./styles.css";
import { render } from "solid-js/web";
import App from "./App";

render(() => <App />, document.getElementById("root")!);
