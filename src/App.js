import ColorButton from "./ColorButton";
import ColorHeading from "./ColorHeading";

function App() {
  return (
    <main style={{ maxWidth: "32rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ColorHeading>Click ME!</ColorHeading>
        <ColorButton>Click ME!</ColorButton>
        <ColorButton>No, Click ME!</ColorButton>
      </div>
    </main>
  );
}

export default App;
