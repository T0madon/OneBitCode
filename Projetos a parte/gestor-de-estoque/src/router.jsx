import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import StockItems from "./pages/itens/StockItems";
import IndividualItem from "./pages/itens/IndividualItem";
import NewItem from "./pages/itens/NewItem";
import EditItem from "./pages/itens/EditItem";
import ItemsLayout from "./pages/itens/ItemsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          { index: true, element: <StockItems /> },
          { path: "new", element: <NewItem /> },
          { path: ":id", element: <IndividualItem /> },
          { path: ":id/update", element: <EditItem /> },
        ],
      },
    ],
  },
]);

export default router;
