import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// import i18n (needs to be bundled ;))
import "./i18n";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const root = createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
