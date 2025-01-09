function calculate(a, b, c) {
  return (a * b) / c;
}

export default function App() {
  const tech = "React";
  const status = false;
  return (
    <div>
      <h1>{tech} is awesome!</h1>
      <h2>It's easy, like 1 + 1 = {1 + 1}</h2>
      <h2>Or, like 2 * 64 / 8 = {calculate(2, 64, 8)}</h2>
      <h2>Current status: {status ? "ON" : "OFF"}</h2>
    </div>
  );
}
