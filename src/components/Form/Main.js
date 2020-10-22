import React, { useState } from "react";
import Field from "./partials/Field";
import Button from "./partials/Button";
import CheckBox from "./partials/CheckBox";
import { submitBtn, editBtn, cancelBtn } from "./Data";
import generateId from "../../helpers/idGenerator";
import inputValidator from "../../helpers/inputValidator";

import "./Main.css";

const Form = ({ title, fields }) => {
    const fieldsWithId = fields.map((field) => ({
        ...field,
        id: field.id ? field.id : generateId(field.label),
    }));
    const defaultValid = fieldsWithId.map(field => ({id: field.id, valid: true}));
    const [inputs, setInputs] = useState(fieldsWithId);
    const [validation, setValidation] = useState(defaultValid);
    const checkData = () => {
        return (
            fields.filter(({ value }) => value !== undefined && value !== "")
                .length > 0
        );
    };
    const validateInputs = () => {
      const valid = inputs.map(input => ({id: input.id, valid: inputValidator(input.value, input.type, input.required, input.min, input.max)}));
      setValidation(valid);
      return valid.filter(item => item.valid !== true).length === 0;
    }
    const handleChange = (event) => {
        let index = inputs.findIndex(
            (element) => element.id === event.target.id
        );
        let newInputs = [...inputs];
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        newInputs[index] = { ...newInputs[index], value: value};
        setInputs(newInputs);
    };
    const handleClear = () => {
        let newInputs = inputs.map((input) => ({ ...input, value: "" }));
        setInputs(newInputs);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateInputs()) {
          console.log("Sent data:");
          inputs.map(({ label, value }) => console.log(`${label}: ${value}`));
          handleClear();
        }
    };
    const handleEdit = handleSubmit;
    const submitControl = checkData() ? editBtn : submitBtn;
    const submitHandler = checkData() ? handleEdit : handleSubmit;
    return (
        <form className="form">
            <div className="form__header">
                <h2> {title} </h2>
            </div>
            <div className="form__content">
                {inputs.map((field) => (
                    field.type === "checkbox" ?
                    <CheckBox key={field.label} {...field} handleChange={handleChange}/> :
                    <Field
                        key={field.label}
                        {...field}
                        handleChange={handleChange}
                        valid={validation[validation.findIndex(item => item.id === field.id)].valid}
                    />
                ))}
            </div>
            <div className="form__controls">
                <Button {...cancelBtn} handleClick={handleClear} />
                <Button {...submitControl} handleClick={submitHandler} />
            </div>
        </form>
    );
};

Form.defaultProps = {
    title: "My Form",
};

export default React.memo(Form);
