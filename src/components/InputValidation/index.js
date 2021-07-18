import React, { useState } from "react";
import "./index.scss";
import Button from "../Button";
import InputCheckBox from "../Checkbox";
import Input from "../Input";
import Modal from "../modal";
import { capitalizeFirstLetter, validate } from "../../utility/common";

const InputValidation = () => {
  const [checked, setChecked] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const checkboxFunction = () => {
    setChecked(!checked);
  };

  const modalClosed = () => {
    setModalStatus(false);
    setModalMessage("");
  };

  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleUserInput = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: validate(e.target.name, e.target.value),
    });

    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach((name) => {
      const error = validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (fields.name && fields.email && fields.password) {
      const data = {
        name: fields.name,
        email: fields.email,
        password: fields.password,
      };

      if (!checked) {
        setModalStatus(true);
        setModalMessage("Please accept terms and privacy policy to sign up.");
        return;
      }

      setModalStatus(true);
      setModalMessage("Sign up successful.");
      console.log("----data----", data);
    }
  };

  return (
    <div className="validation">
      {modalMessage && (
        <Modal show={modalStatus} modalClosed={modalClosed}>
          {modalMessage}
        </Modal>
      )}
      <div className="validation_top">
        <div className="validation_top_input">
          {Object.keys(fields).map(function (keyName, keyIndex) {
            return (
              <Input
                key={keyName + keyIndex}
                type={
                  keyName === "email"
                    ? "email"
                    : keyName === "password"
                    ? "password"
                    : "text"
                }
                name={`${keyName}`}
                value={fields[keyName]}
                handleUserInput={handleUserInput}
                error={errors[keyName]}
                placeholder={capitalizeFirstLetter(`${keyName}`)}
                inputIcon={
                  errors[keyName]
                    ? require(`../../assets/svg/${keyName}-error.svg`).default
                    : require(`../../assets/svg/${keyName}.svg`).default
                }
                inputStatusIcon={
                  errors[keyName]
                    ? require("../../assets/svg/wrong.svg").default
                    : fields[keyName]
                    ? require("../../assets/svg/right.svg").default
                    : ""
                }
              />
            );
          })}
        </div>
      </div>

      <div className="validation_middle">
        <InputCheckBox checkboxFunction={checkboxFunction}>
          &nbsp;I agree to the <span>Terms</span> and{" "}
          <span>Privacy Policy</span>.
        </InputCheckBox>
      </div>

      <div className="validation_bottom">
        <Button
          clickFunction={handleSubmit}
          text={"Sign up"}
          icon={require("../../assets/svg/arrow.svg").default}
        />
      </div>
    </div>
  );
};

export default InputValidation;
