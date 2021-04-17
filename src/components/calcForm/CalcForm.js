import { useState } from "react";
import FormInput from "../formInput";
import getFibList from "../../helpers/getFibList";
import List from "../list";

const CalcForm = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [calculation, setCalculation] = useState({});

  const onChange = (e) => {
    const value = e.target.validity.valid ? e.target.value : "";
    setValue(value);
  };

  const handleCalculation = (e) => {
    e.preventDefault();

    if (value > 0) {
      setError("");

      const calc = getFibList(value);
      setCalculation(calc);
    } else {
      setCalculation({});
      setError("Integer must be greater than 0!");
    }
  };

  return (
    <div>
      <form onSubmit={handleCalculation}>
        <FormInput
          name="number"
          label="Enter a number from 0-500:"
          type="text"
          placeholder="Enter number..."
          value={value || ""}
          pattern="[0-9]*"
          maxLength={3}
          onChange={onChange}
          className=""
          error={error}
        />
        <button type="submit">Calculate!</button>
      </form>
      <div>
        <List items={calculation} />
      </div>
    </div>
  );
};

export default CalcForm;
