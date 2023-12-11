import './App.css';
import ColorButtonA from "./ColorButtonA";
import ColorButtonB from "./ColorButtonB";

function App() {
  return (
    <div className="App">
      <section className="container">
        <h1>Pure and Higher-Order Components</h1>
        <ColorButtonA />
        <ColorButtonB />
      </section>
    </div>
  );
}

export default App;
