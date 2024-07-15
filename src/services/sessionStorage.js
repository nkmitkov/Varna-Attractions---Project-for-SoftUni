export const setSessionStorage = ({username, email, _id, accessToken}) => {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("id", _id);
    sessionStorage.setItem("accessToken", accessToken);
};

export const getSessionStorageItem = (item) => sessionStorage.getItem(item);