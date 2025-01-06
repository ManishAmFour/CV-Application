import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InputDetails from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InputDetails />
  </StrictMode>
);
