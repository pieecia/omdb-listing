import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/routes/Home.tsx";
import SingleMovie from "@/routes/SingleMovie.tsx";
import Layout from "@/routes/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: () => <Home />,
      },
      {
        path: "/movies/:title",
        Component: () => <SingleMovie />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
