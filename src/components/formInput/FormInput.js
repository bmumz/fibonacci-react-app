import PropTypes from "prop-types";

const FormInput = ({
  name,
  label,
  type,
  value,
  placeholder,
  maxLength,
  onChange,
  pattern,
  className,
  error,
}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      pattern={pattern}
      maxLength={maxLength}
      onChange={onChange}
      className={className}
    />
    {error && <p style={{ color: "red" }}>{error}</p>}
  </div>
);

FormInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]).isRequired,
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default FormInput;
