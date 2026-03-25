import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.ts";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider defaultColorScheme="dark">
        <BrowserRouter>
          <Notifications />
          <App />
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  </StrictMode>,
);
