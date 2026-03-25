import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

// páginas
import Home from "./routes/Home.jsx";
import NewPost from "./routes/NewPost.jsx";
import Post from "./routes/Post.jsx";
import Admin from "./routes/Admin.jsx";
import EditPost from "./routes/EditPost.jsx";

import "./index.css";

function ErrorBoundary() {
  const error = useRouteError();
  console.error("Erro capturado pelo ErrorBoundary:", error);
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops! Ocorreu um erro no componente.</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/new",
          element: <NewPost />,
        },
        {
          path: "/posts/:id",
          element: <Post />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/posts/edit/:id",
          element: <EditPost />,
        },
        {
          path: "*",
          element: <h1>404 - Página não encontrada</h1>,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
