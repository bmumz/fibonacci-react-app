import Heading from "./components/heading";
import CalcForm from "./components/calcForm";
import About from "./components/about";

function App() {
  return (
    <div className="layout">
      <Heading>Fibonnaci Sequence Calculator</Heading>
      <About />
      <Heading>Try it Out!</Heading>
      <p>
        Enter a number to find out what the Fibonacci Sequence up until that
        number is! Your number can be anywhere between 0-500!
      </p>
      <CalcForm />
    </div>
  );
}

export default App;
