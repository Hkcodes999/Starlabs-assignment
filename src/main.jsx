import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { EventProvider } from "./context/EventContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.PROD ? '/Starlabs-assignment' : '/'}>
    <EventProvider>
      <App />
    </EventProvider>
  </BrowserRouter>
);
