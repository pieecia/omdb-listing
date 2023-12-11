import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Reset } from "styled-reset";
import setupStore from "@/services/store.ts";
import App from "@/App.tsx";
import { ThemeProvider } from "styled-components";
import theme from "@/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={setupStore}>
      <ThemeProvider theme={theme}>
        <Reset />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
