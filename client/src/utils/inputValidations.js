export default function inputValidations(formType, formData) {
    // i can do a loop the check if any input field is empty and return a single error for all formTypes

    if (formType === "Login") {
        const { email, password } = formData;

        if (!email || !password) {
            return "Both input fields are required";
        };
        if (!emailValidator(email)) {
            return "Email must be valid";
        };
        if (password.length < 6) {
            return "Password must be at least 6 characters";
        };
    } 
    else if (formType === "Register") {
        const { username, email, password, rePassword, avatar } = formData;

        if (!username || !email || !password || !rePassword || !avatar) {
            return "All input fields are required";
        };
        if (username.length < 4) {
            return {
                inputErrorMessage: "Username must be at least 4 characters",
                inputName: "username"
            };
        };
        if (!emailValidator(email)) {
            return {
                inputErrorMessage: "Email must be valid",
                inputName: "email"
            };
        };
        if (password.length < 6 ) {
            return {
                inputErrorMessage: "Password must be at least 6 characters",
                inputName: "password"
            };
        };
        if (password !== rePassword) {
            return {
                inputErrorMessage: "Both passwords must match",
                inputName: "rePassword"
            };
        };
        if (!urlValidator(avatar)) {
            return {
                inputErrorMessage: "Avatar must be a valid link",
                inputName: "avatar"
            };
        };
    }
    else if (formType === "Create") {
        const { name, image, address, hours, phone, price, website, description } = formData;

        if (!name || !image || !address || !hours || !phone || !price || !website || !description) {
            return "All input fields are required";
        };
        if (name.length < 4) {
            return {
                inputErrorMessage: "Name must be at least 4 characters",
                inputName: "name"
            };
        };
        if (!urlValidator(image)) {
            return {
                inputErrorMessage: "Image must be a valid link",
                inputName: "image"
            };
        };
        if (address.length < 4) {
            return {
                inputErrorMessage: "Address must be at least 4 characters",
                inputName: "address"
            };
        };
        if (hours.length < 4) {
            return {
                inputErrorMessage: "Operating hours must be at least 4 characters",
                inputName: "hours"
            };
        };
        if (!phoneValidator(phone)) {
            return {
                inputErrorMessage: "Phone number must be valid. Use only numbers.",
                inputName: "phone"
            };
        };
        if (!priceValidator(price)) {
            return {
                inputErrorMessage: "Price must be 'Free' or a positive number",
                inputName: "price"
            };
        };
        if (!urlValidator(website)) {
            return {
                inputErrorMessage: "Website must be a valid URL address",
                inputName: "website"
            };
        };
        if (description.length < 10 || description.length > 200) {
            return {
                inputErrorMessage: "Description must be between 10 and 200 characters",
                inputName: "description"
            };
        };
    };

    return false;
};

function emailValidator(email) {
    const emailRegExp = /\w+@\w+\.\w+/;
    const emailMatch = email.match(emailRegExp);

    return emailMatch;
};

function urlValidator(url) {
    const urlRegExp = /^https?:\/\//;
    const urlMatch = url.match(urlRegExp);

    return urlMatch;
};

function phoneValidator(phone) {
    if (!Number(phone) || phone.length < 9) {
        return false;
    }

    return true;
};

function priceValidator(price) {
    if (!Number(price) && price !== "Free") {
        return false;
    }
    if (Number(price) < 0) {
        return false;
    }

    return true;
};