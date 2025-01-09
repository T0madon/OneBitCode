import { RouterProvider } from "react-router-dom";
import router from "./router";
import { UsersContextProvider } from "./contexts/UsersContext";

export default function App() {
  return (
    <UsersContextProvider>
      <RouterProvider router={router} />
    </UsersContextProvider>
  );
}
