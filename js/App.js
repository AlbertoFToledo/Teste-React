function App() {
  return (
    <div className="container">
      <h1>Cadastro</h1>

      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="email" />
      <input type="number" placeholder="Idade" />
    </div>
  );
}

// Renderização
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
