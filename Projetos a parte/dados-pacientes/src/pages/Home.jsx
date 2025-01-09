import UsersTable from "../components/UsersTable";

export default function Home() {
  const today = new Date().toLocaleDateString();

  return (
    <>
      <h2>{today}</h2>
      <div id="manha">
        <UsersTable />
      </div>
      <div id="tarde">
        <UsersTable />
      </div>
    </>
  );
}
