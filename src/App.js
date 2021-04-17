import Heading from "./components/heading";
import CalcForm from "./components/calcForm";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <Heading>Fibonnaci Sequence Calculator</Heading>
      <About />
      <Heading>Try it Out!</Heading>
      <p>Enter a number to find out what it's Fibonacci number is!</p>
      <CalcForm />
    </div>
  );
}

export default App;
