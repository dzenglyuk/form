import React from "react";

const CheckBox = ({id, value, handleChange, label}) => {
    return (
        <label>
            {label}
            <input 
            type="checkbox"
            id={id}
            checked={value}
            onChange={handleChange}
            />
        </label>
    );
};

export default CheckBox;