export default function inputValidations(formType, formData) {
    let error = {
        message: "",
    };

    if (formType === "Login") {
        if (!formData.email || !formData.password) {
            error.message = "Both input fields are required";
            return error;
        }

        const emailRegExp = /\w+@\w+\.\w+/;
        const emailMatch = formData?.email.match(emailRegExp);

        if (!emailMatch) {
            error.message = "Email must be valid";
            return error;
        } else if (formData.password.length < 6) {
            error.message = "Password must be at least 6 characters";
            return error;
        }
    }

    return error;
};