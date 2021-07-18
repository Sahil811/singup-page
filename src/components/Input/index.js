import React, { useEffect } from "react";
import "./index.scss";

const Input = ({
  type,
  name,
  value,
  handleUserInput,
  error,
  placeholder,
  inputIcon,
  inputStatusIcon,
}) => {
  useEffect(() => {
    const element = document?.getElementById(`input-${name}`);
    const inputElement = document?.getElementById(`data-${name}`);
    if (error) {
      element.style.borderColor = "#FF0066";
      inputElement.style.color = "#FF0066";
    } else {
      element.style.borderColor = "#c5d3e8";
      inputElement.style.color = "#7F8A9C";
    }
  }, [error, name]);

  return (
    <div className="input">
      <div className="input_container" id={`input-${name}`}>
        <div>
          <img className="input_icon" src={inputIcon} alt="input-icon" />
        </div>
        <input
          id={`data-${name}`}
          type={type}
          name={name}
          value={value}
          onChange={(event) => handleUserInput(event)}
          placeholder={placeholder}
        />
        <div>
          {(error || value) && <img src={inputStatusIcon} alt="input-status" />}
        </div>
      </div>

      <div className="input_error">
        <span className="text-danger">{error}</span>
      </div>
    </div>
  );
};

export default Input;
