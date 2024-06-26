import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import Exponent from "./components/Exponent";

function App() {
  // State lifted to the App component
  const [count, setCount] = useState(0);
  // Handler functions
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);
  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} onIncrement={increment} onDecrement={decrement} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <Exponent exponent={2} count={count} />
        <Exponent exponent={3} count={count} />
        <Exponent exponent={4} count={count} />
        <Exponent exponent={5} count={count} />
        <Exponent exponent={6} count={count} />
      </div>
    </div>
  );
}

export default App;
