import CreateItem from "./pages/Items/CreateItem";
import Home from "./pages/Home";
import Layout from "./pages/Items/Layout";
import ListItems from "./pages/Items/ListItems";
import RootLayout from "./pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import ShowItem from "./pages/Items/ShowItem";
import UpdateItem from "./pages/Items/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "items",
        element: <Layout />,
        children: [
          { index: true, element: <ListItems /> },
          { path: "new", element: <CreateItem /> },
          { path: ":id", element: <ShowItem /> },
          { path: ":id/update", element: <UpdateItem /> },
        ],
      },
    ],
  },
]);

export default router;
