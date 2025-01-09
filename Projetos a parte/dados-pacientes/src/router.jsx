import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ShowUser from "./pages/ShowUser";
import UpdateUser from "./pages/UpdateUser";
import NewUser from "./pages/NewUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
        children: [
          { path: ":id", element: <ShowUser /> },
          { path: ":id/update", element: <UpdateUser /> },
        ],
      },
      {
        path: "new",
        element: <NewUser />,
      },
    ],
  },
]);

export default router;
