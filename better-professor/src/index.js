// In the index, we actually render what we return from our App component.
// This allows us to use Reacts "synthetic DOM" as apposed to the physical
// DOM, significantly streamlining our app.

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import App from "./App";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root"),
)