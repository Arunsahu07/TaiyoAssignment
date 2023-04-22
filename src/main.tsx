import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.tsx";
import "./index.css";

import { store } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ContactMutationPage from "./pages/ContactMutationPage.tsx";
import ContactDetailPage from "./pages/ContactDetailPage.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      {
        path: "contact",
        element: <ContactPage />,
        errorElement: <ErrorPage />,
      },

      { path: "contact/add", element: <ContactMutationPage mode="add" /> },
      { path: "contact/edit", element: <ContactMutationPage mode="edit" /> },
      { path: "contact/details/:id", element: <ContactDetailPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
