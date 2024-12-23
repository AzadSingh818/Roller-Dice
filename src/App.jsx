import { useState } from "react";
import Home from "./components/Home";
import Game from "./components/Game";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <Game /> : <Home toggle={toggleGamePlay} />}</>
  );
}

export default App;