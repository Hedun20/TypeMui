import ReactDOM from "react-dom/client";
import "./index.css";

import { ModalState } from "./context/ModelContext";
import { BrowserRouter } from "react-router-dom";
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ModalState>
      <App/>
    </ModalState>
  </BrowserRouter>
);
