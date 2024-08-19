export default function inputValidations(formType, formData) {
    // i can do a loop the check if any input field is empty and return a single error for all formTypes

    if (formType === "Login") {
        const { email, password } = formData;

        if (!email || !password) {
            return "Both input fields are required";
        }
        if (!emailValidator(email)) {
            return "Email must be valid";
        } else if (password.length < 6) {
            return "Password must be at least 6 characters";
        }

    } else if (formType === "Register") {
        const { username, email, password, rePassword, avatar } = formData;

        if (!username || !email || !password || !rePassword || !avatar) {
            return "All input fields are required";
        }
        if (username.length < 4) {
            return "Username must be at least 4 characters";
        } else if (!emailValidator(email)) {
            return "Email must be valid";
        } else if (password.length < 6 ) {
            return "Password must be at least 6 characters";
        } else if (password !== rePassword) {
            return "Both passwords must match";
        } else if (!avatarValidator(avatar)) {
            return "Avatar must be a valid link";
        }
    }

    return null;
};

function emailValidator(email) {
    const emailRegExp = /\w+@\w+\.\w+/;
    const emailMatch = email.match(emailRegExp);

    return emailMatch;
}

function avatarValidator(avatar) {
    const avatarRegExp = /^https?:\/\//;
    const avatarMatch = avatar.match(avatarRegExp);

    return avatarMatch;
}