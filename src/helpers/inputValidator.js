const types = {
    password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        error:
            "Password needs to be 8 characters long at contain: 1 uppercase letter, 1 lower case letter, 1 number and 1 special character.",
    },
    date: {
        regex: /^(19|20)?[0-9]{2}([- /.](0?[1-9]|1[012])[- /.])(0?[1-9]|[12][0-9]|3[01])*$/,
        error:
            "Date needs to be in format: dd.mm.yyyy.",
    },
    number: {
        regex: /^\d*$/,
        error: "Number must only contain numbers."
    },
    checkbox: {
        regex: /^(true|false)$/,
        error: "Checkbox must be 'true' of 'false'."
    }
};

const inputValidator = (value, type, required, min, max) => {
    let result;
    if (type === "checkbox") {
        result = types[type].regex.test(value) ? true : {error: types[type].error};
    } else if ((value === undefined || value.trim() === "") && required ) {
        result = {error: "Required."};
    } else if ((value === undefined || value.trim() === "") && !required) {
        return true;
    } else {
        if (type === "text") {
            if (min && max) {
                result = new RegExp(`^.{${min},${max}}$`).test(value.trim()) ? true : {error: `Input needs to be from ${min} to ${max} characters long.`};
            } else if (min) {
                result = new RegExp(`^.{${min},}$`).test(value.trim()) ? true : {error: `Input needs to be at least ${min} characters long.`};
            } else if (max) {
                result = new RegExp(`^.{0,${max}}$`).test(value.trim()) ? true : {error: `Input needs to be no longer than ${max} characters.`};
            } else {
                result = /^.+$/.test(value.trim());
            }
        } else {
            result = types[type].regex.test(value) ? true : {error: types[type].error};
        }
    }
    return result;
};

export default inputValidator;
