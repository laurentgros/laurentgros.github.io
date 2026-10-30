import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import CarportPage from "./pages/Carport";
import ConseilsPage from "./pages/Conseils";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import MentionsPage from "./pages/Mentions";
import PartenairesPage from "./pages/Partenaires";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "nos-conseils", element: <ConseilsPage /> },
      { path: "carport", element: <CarportPage /> },
      { path: "nos-partenaires", element: <PartenairesPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "mentions-legales", element: <MentionsPage /> },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
