import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./components/Auth/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </ChakraProvider>
);
