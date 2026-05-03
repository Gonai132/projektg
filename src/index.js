import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <HashRouter>
    <App />
  </HashRouter>
);

reportWebVitals();