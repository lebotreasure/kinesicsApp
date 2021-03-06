import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import 'animate.css'
import "semantic-ui-css/semantic.min.css"
import "./index.css"
import App from "./App"

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById("root")
);
