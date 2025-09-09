import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { EventProvider } from "./context/EventContext";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <EventProvider>
      <App />
    </EventProvider>
  </HashRouter>
);
