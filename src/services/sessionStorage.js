export const setSessionStorage = ({name, email, _id, accessToken}) => {
    sessionStorage.setItem("username", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("id", _id);
    sessionStorage.setItem("accessToken", accessToken);
};

export const getSessionStorageItem = (item) => sessionStorage.getItem(item);