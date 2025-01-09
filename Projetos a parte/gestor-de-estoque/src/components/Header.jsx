import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
        <h4>REACT STOCK</h4>
        <Link to="/">Início</Link>
        <Link to="/items">Itens</Link>
      </nav>
    </header>
  );
}
