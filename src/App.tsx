import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

const HomePage = React.lazy(() => import("./pages/Home"));
const ConseilsPage = React.lazy(() => import("./pages/Conseils"));
const CarportPage = React.lazy(() => import("./pages/Carport"));
const PartenairesPage = React.lazy(() => import("./pages/Partenaires"));
const ContactPage = React.lazy(() => import("./pages/Contact"));
const MentionsPage = React.lazy(() => import("./pages/Mentions"));

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
      <React.Suspense fallback={null}>
        <RouterProvider router={router} />
      </React.Suspense>
    </HelmetProvider>
  );
};

export default App;
