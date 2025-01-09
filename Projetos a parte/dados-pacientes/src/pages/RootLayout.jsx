import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/home" className="logo">
          Consultório Odontológico
        </Link>
        <nav>
          <Link to="/home">Início</Link>
          <Link to="/new">Pacientes</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>Feito por T0madon - React & React Router</footer>
    </>
  );
}
