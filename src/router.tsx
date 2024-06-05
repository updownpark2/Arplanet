import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Artist from "./pages/Artist";
import Concert from "./pages/Concert";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/artist",
    element: (
      <Layout>
        <Artist />
      </Layout>
    ),
  },
  {
    path: "/concert",
    element: (
      <Layout>
        <Concert />
      </Layout>
    ),
  },
]);
