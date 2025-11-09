import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

// Configure axios global baseURL so all axios calls to '/api/*' go to the
// correct backend depending on environment (dev -> Vite proxy, prod -> Render)
import axios from "axios";
import { API_BASE_URL, USE_PROXY } from "./config/api";

if (!USE_PROXY) {
  // In production, prefix API requests with the backend URL
  axios.defaults.baseURL = API_BASE_URL;
} else {
  // In development, keep relative paths so Vite proxy forwards to backend
  axios.defaults.baseURL = "";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
