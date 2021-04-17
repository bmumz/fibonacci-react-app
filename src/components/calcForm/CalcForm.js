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

    if (value > 0 && value < 501) {
      setError("");

      const calc = getFibList(value);
      setCalculation(calc);
    } else {
      setCalculation({});
      setError("Integer must be between 0 & 500!");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleCalculation}>
        <FormInput
          name="number"
          label="Pick a number:"
          type="text"
          placeholder="Enter number..."
          value={value || ""}
          pattern="[0-9]*"
          maxLength={3}
          onChange={onChange}
          className="form__input"
        />
        <button type="submit">Calculate!</button>
      </form>
      {error && <p className="form__error">{error}</p>}
      <div>
        <List items={calculation} className="fibList" />
      </div>
    </div>
  );
};

export default CalcForm;
