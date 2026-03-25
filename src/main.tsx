import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider defaultColorScheme="dark">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  </StrictMode>,
);
