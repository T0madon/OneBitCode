import { Link, Outlet } from "react-router-dom";

export default function ItemsLayout() {
  return (
    <main>
      <h1>Stock Items</h1>
      <div className="tabs">
        <Link to="/items">Todos os itens</Link>
        <Link to="/items/new">Novo Item</Link>
      </div>
      <Outlet />
    </main>
  );
}
