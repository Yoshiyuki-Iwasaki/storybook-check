import react from "react";
import Button from "./components/atoms/button/button";

function App() {
  return (
    <div>
      <Button variant="secondary">Button text</Button>
      <Button href={"/router"}>Linked button</Button>
    </div>
  );
}

export default App;
