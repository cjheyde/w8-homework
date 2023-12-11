import './App.css';
import ColorButtonA from "./ColorButtonA";
import ColorButtonB from "./ColorButtonB";
import ColorButton from "./ColorButtonSol";

function App() {
  return (
    <div className="App">
      <section className="container">
        <h1>Pure and Higher-Order Components</h1>
        <ColorButtonA />
        <ColorButtonB />
      </section>
      <section className="container">
        <h1>Pure and Higher-Order Components Solution</h1>
        <ColorButton />
      </section>
    </div>
  );
}

export default App;
