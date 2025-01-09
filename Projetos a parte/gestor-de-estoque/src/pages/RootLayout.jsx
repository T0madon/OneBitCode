import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <p>Esse é o layout principal</p>
        <hr />
        <Outlet />
      </main>
      <footer>
        <hr />
        <p>Feito com React e React Router!</p>
      </footer>
    </>
  );
}
