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
            return "Username must be at least 4 characters";
        };
        if (!emailValidator(email)) {
            return "Email must be valid";
        };
        if (password.length < 6 ) {
            return "Password must be at least 6 characters";
        };
        if (password !== rePassword) {
            return "Both passwords must match";
        };
        if (!urlValidator(avatar)) {
            return "Avatar must be a valid link";
        };
    }
    else if (formType === "Create") {
        const { name, image, address, hours, phone, price, website, description } = formData;

        if (!name || !image || !address || !hours || !phone || !price || !website || !description) {
            return "All input fields are required";
        };
        if (name.length < 4) {
            return "Name must be at least 4 characters";
        };
        if (!urlValidator(image)) {
            return "Image must be a valid link";
        };
        if (address.length < 4) {
            return "Address must be at least 4 characters";
        };
        if (hours.length < 4) {
            return "Operating hours must be at least 4 characters";
        };
        if (!phoneValidator(phone)) {
            return "Phone number must be valid. Use only numbers.";
        };
        if (!priceValidator(price)) {
            return "Price must be 'Free' or a positive number";
        };
        if (!urlValidator(website)) {
            return "Website must be a valid URL address";
        };
        if (description.length < 10 || description.length > 200) {
            return "Description must be between 10 and 200 characters";
        };
    };

    return null;
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