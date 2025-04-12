import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LanguageContextProv from "./context/LanguajeContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <LanguageContextProv>
    <App />
  </LanguageContextProv>
);
